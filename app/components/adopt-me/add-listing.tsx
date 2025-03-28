import { useId } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

export default function AddListing() {
	const id = useId();
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">List Trade</Button>
			</DialogTrigger>
			<DialogContent className="lg:w-96">
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

				<form className="space-y-5">
					<div className="space-y-4">
						<div className="*:not-first:mt-2">
							<Label htmlFor={`${id}-amount`}>Amount</Label>
							<Input
								id={`${id}-amount`}
								placeholder="Enter the amount"
								type="number"
								min="1"
								defaultValue="1"
								required
							/>
						</div>
						<div className="flex items-center gap-4">
							<CustomCheckbox
								className="has-checked:bg-blue-500"
								label="F"
								htmlfor="isFlyable"
							/>
							<CustomCheckbox
								className="has-checked:bg-pink-500"
								label="R"
								htmlfor="isRideable"
							/>
						</div>
						<div className="flex items-center gap-4">
							<CustomCheckbox
								className="has-checked:bg-green-500"
								label="N"
								htmlfor="isNeon"
							/>
							<CustomCheckbox
								className="has-checked:bg-indigo-800"
								label="M"
								htmlfor="isMegaNeon"
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
						</div>
						<div className="*:not-first:mt-2">
							<Label htmlFor={`${id}-looking-for`}>
								Items You're Looking For
							</Label>
							<Input
								id={`${id}-looking-for`}
								placeholder="Specify the items you want in return"
								type="text"
							/>
						</div>
					</div>
					<Button type="button" className="w-full">
						List Trade
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
