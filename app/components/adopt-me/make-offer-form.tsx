"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useAppForm } from "../form";
import type { AddOfferType } from "@/lib/validation/add-offer";
import type { listingType } from "./listing-item";

export function MakeOfferForm({
	listing,
	onClose,
	open, // new prop to control open state
}: {
	listing: listingType;
	onClose: () => void;
	open: boolean;
}) {
	const form = useAppForm({
		defaultValues: { offer: [] } as AddOfferType,
	});

	return (
		<Drawer open={open} onOpenChange={(openState) => !openState && onClose()}>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm overflow-y-auto px-2">
					<DrawerHeader>
						<DrawerTitle>Make Offer</DrawerTitle>
						<DrawerDescription>Set your daily activity goal.</DrawerDescription>
					</DrawerHeader>
					<form>
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
