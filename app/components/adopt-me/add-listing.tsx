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
							<Checkbox id={`${id}-flyable`} />
							<Label htmlFor={`${id}-flyable`}>Flyable</Label>
							<Checkbox id={`${id}-rideable`} />
							<Label htmlFor={`${id}-rideable`}>Rideable</Label>
						</div>
						<div className="flex items-center gap-4">
							<Checkbox id={`${id}-neon`} />
							<Label htmlFor={`${id}-neon`}>Neon</Label>
							<Checkbox id={`${id}-mega-neon`} />
							<Label htmlFor={`${id}-mega-neon`}>Mega Neon</Label>
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
