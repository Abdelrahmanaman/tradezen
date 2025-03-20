import { queryOptions, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { auth } from "@/lib/auth/auth";
import { getWebRequest } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";



export const getUser = createServerFn({ method: "GET" }).handler(async () => {
	const req = getWebRequest();

	if (!req) {
		throw new Error("No request found");
	}
	const session = await auth.api.getSession({ headers: req.headers });

	if (!session?.user) {
		return null;
	}
	return session?.user;
});

export const getUserQuery = () => {
	return queryOptions({
		queryKey: ["user"],
		queryFn: async () => {
			const users = await getUser();
			console.log(users);
			return {
				users,
			};
		},
		staleTime: 5 * 60 * 1000, // 5 minutes before data is stale
		gcTime: 30 * 60 * 1000, // 30 minutes before garbage collectionn
	});
};

// TODO: implement sign in and sign out
// export const useSignInMutation = () => {
// 	const invalidateAuth = useInvalidateAuth("/profile");
// 	return createMutation(() => ({
// 		mutationFn: ({ email, password }: { email: string; password: string }) =>
// 			signIn.email({
// 				email,
// 				password,
// 			}),
// 		onSuccess: () => {
// 			invalidateAuth();
// 		},
// 		onError: () => {
// 			console.error("Sign-in failed:", error);
// 		},
// 	}));
// };

// export const useSignOutMutation = () => {
// 	const invalidateAuth = useInvalidateAuth("/login");
// 	return createMutation(() => ({
// 		mutationFn: () => signOut(),
// 		onSuccess: () => {
// 			invalidateAuth();
// 		},
// 	}));
// };
