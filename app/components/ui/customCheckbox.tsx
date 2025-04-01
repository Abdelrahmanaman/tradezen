import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Label } from "./label";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { useFieldContext } from "../form";
import { FieldErrors } from "../form/field-errors";

interface CustomCheckboxProps {
	label: string;
	className?: string;
	toolTip?: string;
}

export default function CustomCheckbox({
	label,
	className,
	toolTip,
}: CustomCheckboxProps) {
	const field = useFieldContext<boolean>();

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div className="flex focus-within:outline-2 rounded-xl focus-within:outline-amber-600  ">
					<Label
						htmlFor={field.name}
						className={cn(
							"peer has-checked:bg-indigo-600 border text-3xl font-bold size-10 flex items-center justify-center rounded-xl border-transparent cursor-pointer",
							className,
						)}
					>
						<Input
							id={field.name}
							className="sr-only"
							type="checkbox"
							defaultChecked={field.state.value}
							onChange={(e) => field.handleChange(e.target.checked)}
						/>
						{label}
					</Label>
				</div>
			</TooltipTrigger>
			<TooltipContent>{toolTip}</TooltipContent>
			<FieldErrors meta={field.state.meta} />
		</Tooltip>
	);
}
