import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { useAppForm } from "../form";
import { addListSchema, type AddListType } from "@/lib/validation/add-list";
import { useAddListing } from "@/hooks/use-add-listing";

export default function AddListingForm({ itemId }: { itemId: number }) {
	const { mutateAsync, isPending } = useAddListing();
	const form = useAppForm({
		defaultValues: {
			itemId: itemId,
			amount: 1,
			isFlyable: false,
			isRideable: false,
			isNeon: false,
			isMegaNeon: false,
			age: "Full-Grown",
			lookingFor: [],
		} as AddListType,
		onSubmit: ({ value }) => {
			console.log("HERE YOU GO", value);
			mutateAsync(value);
		},
		validators: {
			onSubmit: addListSchema,
		},
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
						<div className="*:not-first:mt-2">
							<form.AppField name="amount">
								{(field) => (
									<field.TextField
										label="Amount"
										placeholder="Enter the amount"
										type="number"
										inputMode="numeric"
									/>
								)}
							</form.AppField>
						</div>
						<div className="*:not-first:mt-2">
							<form.AppField name="age">
								{(field) => <field.CustomSelect />}
							</form.AppField>
						</div>
						<div className="flex items-center gap-4">
							<form.AppField name="isFlyable">
								{(field) => (
									<field.CustomCheckbox
										label="F"
										className="has-checked:bg-blue-500 hover:bg-blue-500"
										toolTip="Flying"
									/>
								)}
							</form.AppField>
							<form.AppField name="isRideable">
								{(field) => (
									<field.CustomCheckbox
										label="R"
										className="has-checked:bg-pink-500 hover:bg-pink-500"
										toolTip="Rideable"
									/>
								)}
							</form.AppField>
						</div>
						<div className="flex items-center gap-4">
							<form.AppField name="isNeon">
								{(field) => (
									<field.CustomCheckbox
										label="N"
										className="has-checked:bg-green-500 hover:bg-green-500"
										toolTip="Neon"
									/>
								)}
							</form.AppField>
							<form.AppField name="isMegaNeon">
								{(field) => (
									<field.CustomCheckbox
										label="M"
										className="has-checked:bg-indigo-800 hover:bg-indigo-800"
										toolTip="Mega Neon"
									/>
								)}
							</form.AppField>
						</div>
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
