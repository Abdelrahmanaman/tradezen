import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Input } from "../ui/input";
import { Filter } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { useState } from "react"; // We still need state for a functional filter

export function ListingFilter() {
	// "Raw data" for initial filter values
	const initialMegaNeon = false;
	const initialNeon = false;
	const initialFlyable = false;
	const initialRideable = false;
	const initialAgeMin = "";
	const initialAgeMax = "";
	const initialPriceMin = "";
	const initialPriceMax = "";
	const initialSortBy = "latest";
	const initialPotionFilter = "Any";

	// State to manage the active filter values (initialized with raw data)
	const [isMegaNeon, setIsMegaNeon] = useState(initialMegaNeon);
	const [isNeon, setIsNeon] = useState(initialNeon);
	const [isFlyable, setIsFlyable] = useState(initialFlyable);
	const [isRideable, setIsRideable] = useState(initialRideable);
	const [ageMin, setAgeMin] = useState(initialAgeMin);
	const [ageMax, setAgeMax] = useState(initialAgeMax);
	const [priceMin, setPriceMin] = useState(initialPriceMin);
	const [priceMax, setPriceMax] = useState(initialPriceMax);
	const [sortBy, setSortBy] = useState(initialSortBy);
	const [potionFilter, setPotionFilter] = useState(initialPotionFilter);

	const handleResetFilters = () => {
		setIsMegaNeon(initialMegaNeon);
		setIsNeon(initialNeon);
		setIsFlyable(initialFlyable);
		setIsRideable(initialRideable);
		setAgeMin(initialAgeMin);
		setAgeMax(initialAgeMax);
		setPriceMin(initialPriceMin);
		setPriceMax(initialPriceMax);
		setSortBy(initialSortBy);
		setPotionFilter(initialPotionFilter);
	};

	return (
		<div className="bg-zinc-800 rounded-md p-4 mb-4 text-white w-full">
			<h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
				<Filter className="w-5 h-5" /> Filters & Sorting
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
				<div className="flex items-center justify-between">
					<Label htmlFor="megaNeon">Mega Neon</Label>
					<Switch
						id="megaNeon"
						checked={isMegaNeon}
						onCheckedChange={setIsMegaNeon}
					/>
				</div>
				<div className="flex items-center justify-between">
					<Label htmlFor="neon">Neon (Non-Mega)</Label>
					<Switch id="neon" checked={isNeon} onCheckedChange={setIsNeon} />
				</div>
				<div className="flex items-center justify-between">
					<Label htmlFor="flyable">Flyable</Label>
					<Switch
						id="flyable"
						checked={isFlyable}
						onCheckedChange={setIsFlyable}
					/>
				</div>
				<div className="flex items-center justify-between">
					<Label htmlFor="rideable">Rideable</Label>
					<Switch
						id="rideable"
						checked={isRideable}
						onCheckedChange={setIsRideable}
					/>
				</div>
				<div>
					<Label className="block text-sm text-zinc-400 mb-1">Age</Label>
					<div className="flex items-center gap-2">
						<Input
							type="number"
							placeholder="Min"
							className="w-24 h-10 bg-zinc-700 border-zinc-600 text-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
							value={ageMin}
							onChange={(e) => setAgeMin(e.target.value)}
						/>
						<span className="text-zinc-400">-</span>
						<Input
							type="number"
							placeholder="Max"
							className="w-24 h-10 bg-zinc-700 border-zinc-600 text-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
							value={ageMax}
						/>
					</div>
				</div>
				<div>
					<Label className="block text-sm text-zinc-400 mb-1">
						Price (Robux)
					</Label>
					<div className="flex items-center gap-2">
						<Input
							type="number"
							placeholder="Min"
							className="w-24 h-10 bg-zinc-700 border-zinc-600 text-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
							value={priceMin}
							onChange={(e) => setPriceMin(e.target.value)}
						/>
						<span className="text-zinc-400">-</span>
						<Input
							type="number"
							placeholder="Max"
							className="w-24 h-10 bg-zinc-700 border-zinc-600 text-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
							value={priceMax}
						/>
					</div>
				</div>

				{/* Filter Option: Potion Type */}
				<div>
					<Label
						htmlFor="potionFilter"
						className="block text-sm text-zinc-400 mb-1"
					>
						Potion Type
					</Label>
					<Select value={potionFilter} onValueChange={setPotionFilter}>
						<SelectTrigger className="w-full h-10 bg-zinc-700 border-zinc-600 text-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
							<SelectValue placeholder="Any" />
						</SelectTrigger>
						<SelectContent className="bg-zinc-800 border-zinc-600 rounded-md text-sm">
							<SelectItem value="Any">Any</SelectItem>
							<SelectItem value="Fly">Fly</SelectItem>
							<SelectItem value="Ride">Ride</SelectItem>
							<SelectItem value="Fly Ride">Fly Ride</SelectItem>
							<SelectItem value="No Potion">No Potion</SelectItem>
							{/* Add more specific potion options if needed */}
						</SelectContent>
					</Select>
				</div>
			</div>

			<div>
				<Label htmlFor="sort" className="block text-sm text-zinc-400 mb-1">
					Sort By
				</Label>
				<Select value={sortBy} onValueChange={setSortBy}>
					<SelectTrigger className="w-full h-10 bg-zinc-700 border-zinc-600 text-zinc-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
						<SelectValue placeholder="Latest" />
					</SelectTrigger>
					<SelectContent className="bg-zinc-800 border-zinc-600 rounded-md text-sm">
						<SelectItem value="latest">Latest Listings</SelectItem>
						<SelectItem value="oldest">Oldest Listings</SelectItem>
						<SelectItem value="price_low">Price: Low to High</SelectItem>
						<SelectItem value="price_high">Price: High to Low</SelectItem>
						<SelectItem value="rating_high">
							User Rating: High to Low
						</SelectItem>
						<SelectItem value="rating_low">User Rating: Low to High</SelectItem>
						<SelectItem value="latest_active">Latest Active</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="flex justify-end gap-2 mt-4">
				<Button variant="outline" size="sm" onClick={handleResetFilters}>
					Reset Filters
				</Button>
				<Button size="sm">Apply Filters</Button>
			</div>
		</div>
	);
}
