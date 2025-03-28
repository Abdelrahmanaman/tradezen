import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Label } from "./label";

export const CustomCheckbox = ({
	label,
	className,
	htmlfor,
}: { label: string; className?: string; htmlfor: string }) => {
	return (
		<div className="flex">
			<Label
				htmlFor={htmlfor}
				className={cn(
					"peer has-checked:bg-indigo-600 border text-3xl font-bold size-10 flex items-center justify-center rounded-xl  border-transparent",
					className,
				)}
			>
				<Input id={htmlfor} className="sr-only" type="checkbox" />
				{label}
			</Label>
		</div>
	);
};
