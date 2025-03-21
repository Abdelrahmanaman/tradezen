import { useState } from "react";
import { useFieldContext } from ".";
import { Input } from "../ui/input";
import { FieldErrors } from "./field-errors";
import { Eye } from "lucide-react";
import { Label } from "../ui/label";

export default function PasswordField() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const field = useFieldContext<string>();

	return (
		<div className="space-y-2">
			<div className="space-y-1">
				<Label htmlFor={field.name}>Password</Label>
				<div className="relative">
					<Input
						id="password"
						className=""
						type={passwordVisible ? "text" : "password"}
						required
						name={field.name}
						value={field.state.value}
						onChange={(e) => {
							field.handleChange(e.target.value);
						}}
						onBlur={field.handleBlur}
					/>
					<button
						type="button"
						className="absolute   right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
						tabIndex={-1}
						onClick={() => setPasswordVisible((prev) => !prev)}
					>
						<Eye className="size-5" />
					</button>
				</div>
			</div>
			<FieldErrors meta={field.state.meta} />
		</div>
	);
}
