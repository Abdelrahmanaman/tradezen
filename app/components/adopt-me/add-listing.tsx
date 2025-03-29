import { useId } from "react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CustomCheckbox } from "../ui/customCheckbox";
import SelectSearch from "./select-search";
import { useAppForm } from "../form";
import {
	addListSchema,
	type AddListType,
	type LookingForType,
} from "@/lib/validation/add-list";
import { Loader2 } from "lucide-react";

export default function AddListing() {
	const id = useId();

	const form = useAppForm({
		defaultValues: {
			lookingFor: [],
		} as LookingForType,
		onSubmit: ({ value }) => {
			console.log(value);
		},
		validators: {},
	});

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">List Trade</Button>
			</DialogTrigger>
			<DialogContent className="lg:w-96  ">
				<div className="flex flex-col items-center gap-2">
					<DialogHeader>
						<DialogTitle className="sm:text-center">
							List Your Adopt Me Trade
						</DialogTitle>
						<DialogDescription className="sm:text-center">
							Provide details about the Adopt Me pet or item you are offering.
						</DialogDescription>
					</DialogHeader>
				</div>

				<form
					className="space-y-5"
					onSubmit={(e) => {
						e.preventDefault();
						e.stopPropagation();
						form.handleSubmit();
					}}
				>
					<div className="space-y-4">
						{/* <div className="*:not-first:mt-2">
							<Label htmlFor={`${id}-amount`}>Amount</Label>
							<Input
								id={`${id}-amount`}
								placeholder="Enter the amount"
								type="number"
								inputMode="numeric"
								pattern="[0-9]+*"
								min="1"
								defaultValue="1"
								required
							/>
						</div>
						<div className="flex items-center gap-4">
							<CustomCheckbox
								className="has-checked:bg-blue-500 hover:bg-blue-500"
								label="F"
								htmlFor="isFlyable"
								toolTip="Flying"
							/>
							<CustomCheckbox
								className="has-checked:bg-pink-500 hover:bg-pink-500"
								label="R"
								htmlFor="isRideable"
								toolTip="Rideable"
							/>
						</div>
						<div className="flex items-center gap-4">
							<CustomCheckbox
								className="has-checked:bg-green-500 hover:bg-green-500"
								label="N"
								htmlFor="isNeon"
								toolTip="Neon"
							/>
							<CustomCheckbox
								className="has-checked:bg-indigo-800 hover:bg-indigo-800"
								label="M"
								htmlFor="isMegaNeon"
								toolTip="Mega Neon"
							/>
						</div>
						<div className="*:not-first:mt-2">
							<Label htmlFor={`${id}-age`}>Age</Label>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select age" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="newborn">Newborn</SelectItem>
									<SelectItem value="junior">Junior</SelectItem>
									<SelectItem value="pre-teen">Pre-Teen</SelectItem>
									<SelectItem value="teen">Teen</SelectItem>
									<SelectItem value="post-teen">Post-Teen</SelectItem>
									<SelectItem value="full-grown">Full-Grown</SelectItem>
								</SelectContent>
							</Select>
						</div> */}
						<div className="*:not-first:mt-2">
							<form.AppField name="lookingFor">
								{(field) => <field.SelectSearch />}
							</form.AppField>
						</div>
					</div>
					<form.AppForm>
						<form.SubmitButton className="w-full">List Trade</form.SubmitButton>
					</form.AppForm>
				</form>
			</DialogContent>
		</Dialog>
	);
}
