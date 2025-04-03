
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";
import { useAppForm } from "../form";
import { addOfferSchema, type AddOfferType } from "@/lib/validation/add-offer";
import type { listingType } from "./listing-item";
import { useAddOffer } from "@/hooks/use-add-offer";

export function MakeOfferForm({
	listing,
	onClose,
	open, // new prop to control open state
}: {
	listing: listingType;
	onClose: () => void;
	open: boolean;
}) {
	const { mutateAsync, isPending } = useAddOffer();
	const form = useAppForm({
		defaultValues: {
			listingId: listing.id,
			offer: [],
		} as AddOfferType,
		onSubmit: ({ value }) => {
			mutateAsync({ data: value });
		},
		validators: {
			onChange: addOfferSchema,
		},
	});

	return (
		<Drawer open={open} onOpenChange={(openState) => !openState && onClose()}>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm overflow-y-auto px-2">
					<DrawerHeader>
						<DrawerTitle>Make Offer</DrawerTitle>
						<DrawerDescription>Set your daily activity goal.</DrawerDescription>
					</DrawerHeader>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							form.handleSubmit(e);
						}}
					>
						<div>
							<form.AppField name="offer">
								{(field) => <field.SelectSearch withQuantity label="Offer" />}
							</form.AppField>
						</div>
						<form.AppForm>
							<form.SubmitButton className="w-full mb-6">
								Submit
							</form.SubmitButton>
						</form.AppForm>
					</form>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
