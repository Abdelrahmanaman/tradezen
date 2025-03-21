import type { AnyFieldMeta } from "@tanstack/react-form";
import { useId } from "react";

type FieldErrorsProps = {
	meta: AnyFieldMeta;
};

export const FieldErrors = ({ meta }: FieldErrorsProps) => {
	const index = useId();
	if (!meta.isTouched) return null;

	return meta.errors.map(({ message }) => (
		<p key={index} className="text-sm font-medium text-destructive">
			{message}
		</p>
	));
};
