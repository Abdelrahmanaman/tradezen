import { Button } from "../ui/button";
import { useFormContext } from ".";
import { useStore } from "@tanstack/react-form";

export default function SubmitButton({
	children,
	className,
}: { children: React.ReactNode; className?: string }) {
	const form = useFormContext();
	const [isSubmitting, canSubmit] = useStore(form.store, (state) => [
		state.isSubmitting,
		state.canSubmit,
	]);
	return (
		<Button
			className={`${className} ${isSubmitting || !canSubmit ? "opacity-50" : ""}`}
			type="submit"
			disabled={isSubmitting || !canSubmit}
		>
			{children}
		</Button>
	);
}
