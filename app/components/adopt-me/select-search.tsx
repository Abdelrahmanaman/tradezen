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

interface QuantityItem {
	name: string;
	quantity: number;
}

interface SelectSearchProps<T extends string | QuantityItem = string> {
	/**
	 * When true, the component will use a quantity UI.
	 * In this mode the field value is expected to be an array of objects
	 * with a name and a quantity.
	 */
	withQuantity?: boolean;
	label?: string;
}

export default function SelectSearch<T extends string | QuantityItem = string>({
	withQuantity = false,
	label = "Looking for",
}: SelectSearchProps<T>) {
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");

	// Debounce the search input.
	const [debouncedSearch] = useDebounce(search, 500);
	const defaultQuery = debouncedSearch === "" ? "a" : debouncedSearch;

	const field = useFieldContext<T[]>();
	const selectedItems = field.state.value;

	const {
		data = [],
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ["adoptme-items", defaultQuery],
		queryFn: async () => searchItems({ data: defaultQuery }),
		// Only enabled if a query exists or if the popover is open.
		enabled: !!defaultQuery || open,
	});

	// Function to update the quantity of an item.
	const updateQuantity = (index: number, newQuantity: number) => {
		if (newQuantity < 1) return;
		if (typeof field.setValue === "function") {
			const updatedItems = selectedItems.map((item, idx) => {
				if (idx === index) {
					return {
						...(item as QuantityItem),
						quantity: newQuantity,
					} as T;
				}
				return item;
			});
			field.setValue(updatedItems);
		}
	};

	// Check whether an item is already selected.
	const isItemSelected = (value: string): boolean => {
		return withQuantity
			? (selectedItems as QuantityItem[]).some((item) => item.name === value)
			: (selectedItems as string[]).includes(value);
	};

	return (
		<div className="*:not(:first-child):mt-2">
			<Label className="px-2">{label}</Label>

			{/* Render selected items as tags */}
			<div className="flex flex-wrap gap-2 mb-2">
				{selectedItems.map((item, index) =>
					withQuantity ? (
						<div
							key={(item as QuantityItem).name}
							className="flex border bg-zinc-900 px-1 w-fit py-1 text-sm font-semibold rounded-md items-center"
						>
							<span>{(item as QuantityItem).name}</span>
							<div className="flex items-center ml-2">
								<Button
									type="button"
									onClick={() =>
										updateQuantity(
											index,
											((item as QuantityItem).quantity || 1) - 1,
										)
									}
									className="px-1 size-5"
								>
									-
								</Button>
								<span className="mx-1 text-xs">
									{(item as QuantityItem).quantity}
								</span>
								<Button
									type="button"
									onClick={() =>
										updateQuantity(
											index,
											((item as QuantityItem).quantity || 1) + 1,
										)
									}
									className="px-1 size-5"
								>
									+
								</Button>
							</div>
							<Button
								onClick={() => field.removeValue(index)}
								className="ml-2 focus:outline-none p-0 h-fit bg-transparent mt-0.5 hover:bg-transparent"
							>
								<XIcon size={12} className="text-white" />
							</Button>
						</div>
					) : (
						<div
							key={(item as string).toString()}
							className="flex border bg-zinc-900 px-1 w-fit py-1 text-sm font-semibold rounded-md"
						>
							<span>{(item as string).toString()}</span>
							<Button
								onClick={() => field.removeValue(index)}
								className="ml-2 focus:outline-none p-0 h-fit bg-transparent mt-0.5 hover:bg-transparent"
							>
								<XIcon size={12} className="text-white" />
							</Button>
						</div>
					),
				)}
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
										if (withQuantity) {
											field.pushValue({ name: currentValue, quantity: 1 } as T);
										} else {
											field.pushValue(currentValue as T);
										}
									}
								}}
							>
								{item.name}
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
