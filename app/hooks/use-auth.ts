import { signIn, signOut, signUp } from "@/lib/auth/auth-client";
import { tryCatch } from "@/lib/try-catch";
import type { LoginPayload, RegisterPayload } from "@/lib/validation/auth";
import { getUserQuery } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";

// Invalidate auth queries
export const useInvalidateAuth = (destination?: string) => {
	const router = useRouter();
	const queryClient = useQueryClient();

	return async () => {
		await queryClient.invalidateQueries(getUserQuery());
		await router.invalidate();
		if (destination) {
			router.navigate({ to: destination });
		}
	};
};

export function useSignIn() {
	const invalidateAuth = useInvalidateAuth("/profile");
	return useMutation({
		mutationFn: async ({ value }: { value: LoginPayload }) => {
			const result = await tryCatch(
				signIn.email({
					email: value.email,
					password: value.password,
				}),
			);

			// Throws a network error in case sign isn't resolved
			if (result.error) {
				throw result.error;
			}

			//Handles errros in case api resolved but there is an error in the response
			// Destructure API response
			const { error: apiError, data: apiData } = result.data;

			// Handle API business logic errors
			if (apiError) {
				throw new Error(apiError.message || "Login failed");
			}

			return apiData; // Return clean data
		},

		onSuccess: (data) => {
			toast.success("User created successfully");
			// invalidateAuth();
		},
		onError: (error: Error) => {
			toast.error(error.message || "An unexpected error occurred");
		},
	});
}

export function useSignOut() {
	const invalidateAuth = useInvalidateAuth("/login");
	return useMutation({
		mutationFn: async () => await signOut(),
		onSuccess: invalidateAuth,
	});
}

export function useSignUp() {
	const invalidateAuth = useInvalidateAuth("/profile");
	return useMutation({
		mutationFn: async ({ value }: { value: RegisterPayload }) => {
			const result = await tryCatch(
				signUp.email({
					email: value.email,
					password: value.password,
					userName: value.userName,
					name: "",
				}),
			);

			// Handle tryCatch errors (network issues, etc.)
			if (result.error) {
				throw result.error;
			}

			// Destructure API response
			const { error: apiError, data: apiData } = result.data;

			// Handle API business logic errors
			if (apiError) {
				throw new Error(apiError.message || "Signup failed");
			}

			return apiData; // Return clean data
		},
		onSuccess: (data) => {
			toast.success("User created successfully");
			// invalidateAuth();
		},
		onError: (error: Error) => {
			toast.error(error.message || "An unexpected error occurred");
		},
	});
}
