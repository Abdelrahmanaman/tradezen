import { useId, useState } from "react";
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

export default function SelectSearch() {
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState<string>(""); // Input for fuzzy search
	const [debouncedSearch] = useDebounce(search, 500); // Debounce search input
	const defaultQuery = debouncedSearch === "" ? "a" : debouncedSearch;
	const field = useFieldContext<string[]>();
	const selectedItems = field.state.value;

	const {
		data = [],
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ["adoptme-items", defaultQuery],
		queryFn: async () => searchItems({ data: defaultQuery }),
		// Only enabled if user typed ≥1 character or if popover is open
		enabled: !!defaultQuery || open,
	});

	return (
		<div className="*:not(:first-child):mt-2">
			<Label>Looking for</Label>

			{/* Render selected items as tags */}
			<div className="flex flex-wrap gap-2 mb-2">
				{selectedItems.map((item, index) => (
					<div
						key={item}
						className="flex border bg-zinc-900 px-1 w-fit   py-1 text-sm font-semibold rounded-md"
					>
						<span>{item}</span>
						<Button
							onClick={() => field.removeValue(index)}
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
								key={item.id}
								value={item.name}
								onSelect={(currentValue) => {
									if (!selectedItems.includes(currentValue)) {
										field.pushValue(currentValue);
									}
								}}
							>
								{item.name}
								{selectedItems.includes(item.name) && (
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
