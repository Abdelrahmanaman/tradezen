import type { type } from "arktype";
import { useFieldContext } from ".";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FieldErrors } from "./field-errors";

type TextFieldProps = {
	label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextField({ label, ...inputProps }: TextFieldProps) {
	const field = useFieldContext<string | number>();

	// Handler to convert the value if the type is "number"
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (inputProps.type === "number") {
			// Convert the input string to a number
			field.handleChange(Number(value));
		} else {
			field.handleChange(value);
		}
	};

	// Convert the field value to a string for display
	const displayValue =
		inputProps.type === "number" && typeof field.state.value === "number"
			? String(field.state.value)
			: (field.state.value as string);

	return (
		<div className="space-y-2">
			<div className="space-y-1">
				<Label htmlFor={field.name}>{label}</Label>
				<Input
					id={field.name}
					value={displayValue}
					onChange={(e) => {
						if (inputProps.type === "number") {
							field.handleChange(Number(e.target.value));
						} else {
							field.handleChange(e.target.value);
						}
					}}
					onBlur={field.handleBlur}
					{...inputProps}
				/>
			</div>
			<FieldErrors meta={field.state.meta} />
		</div>
	);
}
