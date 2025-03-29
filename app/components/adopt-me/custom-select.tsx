import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useFieldContext } from "../form";
import { ageOptions, type AgeType } from "@/lib/validation/add-list";
import { FieldErrors } from "../form/field-errors";

export default function CustomSelect() {
	const field = useFieldContext<AgeType>();
	return (
		<div className="*:not-first:mt-2">
			<Label htmlFor={field.name}>Age</Label>
			<Select
				value={field.state.value}
				onValueChange={(value) => field.handleChange(value as AgeType)}
			>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select age" />
				</SelectTrigger>
				<SelectContent>
					{Object.values(ageOptions).map((option) => (
						<SelectItem
							key={option}
							value={option}
							className="first-letter:capitalize"
						>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<FieldErrors meta={field.state.meta} />
		</div>
	);
}
