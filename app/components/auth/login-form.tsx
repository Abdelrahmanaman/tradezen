import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "@tanstack/react-router";
import { useAppForm } from "../form";
import { loginPayloadSchema, type LoginPayload } from "@/lib/validation/auth";
import { useSignIn } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
	const { mutateAsync, isPending, isError, error } = useSignIn();

	const form = useAppForm({
		defaultValues: {
			email: "",
			password: "",
		} as LoginPayload,
		onSubmit: ({ value }) => {
			mutateAsync({ value });
		},
		validators: {
			onChange: loginPayloadSchema,
		},
	});
	if (error) {
		console.log("error");
	}
	return (
		<Card className="border shadow-lg ">
			<CardHeader className="space-y-1 pb-2">
				<CardTitle className="text-2xl font-bold">Sign in</CardTitle>
				<CardDescription>Choose your preferred sign in method</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4 pt-0">
				<div className="grid grid-cols-2 gap-4">
					<Button
						variant="outline"
						className="flex items-center gap-2  transition-colors"
					>
						<img src="/discord.svg" className="size-6 " alt="discord" />
						<span className="sr-only">Discord</span>
					</Button>
					<Button
						variant="outline"
						className="flex items-center gap-2  transition-colors"
					>
						<img
							src="/roblox_light.svg"
							className="size-20 invert"
							alt="roblox"
						/>
						<span className=" sr-only">Roblox</span>
					</Button>
				</div>

				<div className="flex items-center py-2">
					<Separator className="flex-1" />
					<span className="mx-2 text-xs text-muted-foreground font-medium">
						OR
					</span>
					<Separator className="flex-1" />
				</div>

				<form
					className="space-y-4"
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit(e);
					}}
				>
					<div className="space-y-4">
						<form.AppField name="email">
							{(field) => <field.TextField label="Email" />}
						</form.AppField>

						<form.AppField name="password">
							{(field) => <field.PasswordField />}
						</form.AppField>
					</div>

					<div className="flex items-center space-x-2">
						<Checkbox id="remember" />
						<label
							htmlFor="remember"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Remember me
						</label>
					</div>

					<form.AppForm>
						<form.SubmitButton className="w-full">
							{isPending ? (
								<Loader2 className="size-5 animate-spin" />
							) : (
								"Sign in"
							)}
						</form.SubmitButton>
					</form.AppForm>
				</form>
				{isError && <p className="text-sm text-red-500">{error?.message}</p>}
			</CardContent>
			<CardFooter className="flex justify-center border-t pt-6">
				<p className="text-sm text-muted-foreground">
					Don't have an account?{" "}
					<Link
						to="/"
						className="text-primary font-medium hover:underline transition-colors"
					>
						Sign up
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
}
