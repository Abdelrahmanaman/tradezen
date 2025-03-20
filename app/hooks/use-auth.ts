import { signIn, signOut, signUp } from "@/lib/auth/auth-client";
import type { LoginPayload, RegisterPayload } from "@/lib/validation/auth";
import { getUserQuery } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";

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
			await signIn.email({
				email: value.email,
				password: value.password,
			});
		},
		onSuccess: () => {
			console.log("success");
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
			await signUp.email({
				email: value.email,
				password: value.password,
				userName: value.userName,
				name: "",
			});
		},
		onSuccess: () => {
			console.log("success");
			// invalidateAuth();
		},
	});
}
