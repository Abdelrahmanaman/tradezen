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
				className={`${className} peer has-checked:bg-indigo-600 border text-3xl font-bold py-1 px-2.5 rounded-xl  border-transparent`}
			>
				<Input id={htmlfor} className="sr-only" type="checkbox" />
				{label}
			</Label>
		</div>
	);
};
