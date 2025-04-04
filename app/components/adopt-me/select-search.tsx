import { useState } from "react";
import { CheckIcon, Loader2, XIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { searchItems } from "@/routes/adoptme/product/$productId";
import { Skeleton } from "../ui/skeleton";
import { useFieldContext } from "../form";
import { FieldErrors } from "../form/field-errors";

export interface OfferItem {
	name: string;
	quantity: number;
	imageUrl: string;
}

interface SelectSearchProps {
	label?: string;
	withQuantity?: boolean;
}

export default function SelectSearch({
	label = "Looking for",
	withQuantity = false,
}: SelectSearchProps) {
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");

	// Debounce the search input.
	const [debouncedSearch] = useDebounce(search, 500);
	const defaultQuery = debouncedSearch === "" ? "a" : debouncedSearch;

	// The field value is now a structured array.
	const field = useFieldContext<OfferItem[]>();
	const selectedItems = field.state.value;

	const {
		data = [],
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ["adoptme-items", defaultQuery],
		queryFn: async () => searchItems({ data: defaultQuery }),
		enabled: !!defaultQuery || open,
	});

	// Update quantity of an item at a given index.
	const updateQuantity = (index: number, newQuantity: number) => {
		if (newQuantity < 1) return;
		if (typeof field.setValue === "function") {
			const updatedItems = selectedItems.map((item, idx) =>
				idx === index ? { ...item, quantity: newQuantity } : item,
			);
			field.setValue(updatedItems);
		}
	};

	// Remove an item from the selection.
	const removeItem = (index: number) => {
		field.removeValue(index);
	};

	// Check if an item is already selected.
	const isItemSelected = (value: string): boolean =>
		selectedItems.some((item) => item.name === value);

	return (
		<div className="*:not(:first-child):mt-2">
			<Label className="px-2">{label}</Label>

			{/* Render selected items as tags */}
			<div className="flex flex-wrap gap-2 mb-2">
				{selectedItems.map((item, index) => (
					<div
						key={item.name}
						className="flex border bg-zinc-900 px-1 w-fit py-1 text-sm font-semibold rounded-md items-center"
					>
						<div className="flex items-center gap-1">
							<img src={item.imageUrl} alt={item.name} className="size-5" />
							<span>{item.name}</span>
						</div>
						{withQuantity && (
							<div className="flex items-center ml-2">
								<Button
									type="button"
									onClick={() => updateQuantity(index, item.quantity - 1)}
									className="px-1 size-5"
								>
									-
								</Button>
								<span className="mx-1 text-xs">{item.quantity}</span>
								<Button
									type="button"
									onClick={() => updateQuantity(index, item.quantity + 1)}
									className="px-1 size-5"
								>
									+
								</Button>
							</div>
						)}
						<Button
							onClick={() => removeItem(index)}
							className="ml-2 focus:outline-none p-0 h-fit bg-transparent mt-0.5 hover:bg-transparent"
						>
							<XIcon size={12} className="text-white" />
						</Button>
					</div>
				))}
			</div>

			<Command>
				<div className="relative">
					<CommandInput
						placeholder="Search Adopt Me items..."
						value={search}
						className="text-base"
						onValueChange={setSearch}
						id={field.name}
					/>
					{(isLoading || isFetching) && (
						<Loader2 className="absolute right-2.5 top-2.5 w-4 h-4 animate-spin" />
					)}
				</div>
				<CommandList className="h-32">
					{data.length === 0 && !isLoading && (
						<CommandEmpty>No results found.</CommandEmpty>
					)}
					{(isLoading || isFetching) && (
						<div className="space-y-1 p-2">
							<Skeleton className="h-8" />
							<Skeleton className="h-8" />
							<Skeleton className="h-8" />
							<Skeleton className="h-8" />
						</div>
					)}
					<CommandGroup>
						{data.map((item) => (
							<CommandItem
								key={item.id.toString()}
								value={item.name}
								onSelect={(currentValue) => {
									if (!isItemSelected(currentValue)) {
										// When an item is selected, add it with a default quantity of 1.
										field.pushValue({
											name: currentValue,
											quantity: 1,
											imageUrl: item.imageUrl,
										});
									}
								}}
							>
								<img src={item.imageUrl} alt={item.name} className="size-5" />
								<span>{item.name}</span>
								{isItemSelected(item.name) && (
									<CheckIcon size={16} className="ml-auto" />
								)}
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</Command>
			<FieldErrors meta={field.state.meta} />
		</div>
	);
}
