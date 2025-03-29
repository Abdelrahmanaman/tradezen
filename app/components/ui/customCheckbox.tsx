import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Label } from "./label";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export const CustomCheckbox = ({
	label,
	className,
	htmlFor,
	toolTip,
}: {
	label: string;
	className?: string;
	htmlFor: string;
	toolTip?: string;
}) => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<div className="flex">
					<Label
						htmlFor={htmlFor}
						className={cn(
							"peer has-checked:bg-indigo-600 border text-3xl font-bold size-10 flex items-center justify-center rounded-xl  border-transparent",
							className,
						)}
					>
						<Input id={htmlFor} className="sr-only" type="checkbox" />
						{label}
					</Label>
				</div>
			</TooltipTrigger>
			<TooltipContent>{toolTip}</TooltipContent>
		</Tooltip>
	);
};
