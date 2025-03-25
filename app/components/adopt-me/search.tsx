import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export default function SearchForm() {
	return (
		<div className=" mx-auto py-6 size-fit top-0 transition-all sticky ">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Adopt Me Item Search
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
				<Card>
					<CardContent className="space-y-6">
						{/* Search Input (First for Priority) */}
						<div>
							<Label htmlFor="search" className="block text-sm font-medium">
								Search
							</Label>
							<Input type="text" id="search" placeholder="Neon Unicorn..." />
						</div>

						{/* Price Range (Directly Under Search for Quick Filtering) */}
						<div>
							<Label className="block text-sm font-medium">Price Range</Label>
							<div className="grid grid-cols-2 gap-4">
								<Input type="number" placeholder="Min" />
								<Input type="number" placeholder="Max" />
							</div>
						</div>

						{/* Category & Rarity (Side by Side) */}
						<div className="grid grid-cols-2 gap-4">
							<div>
								<Label htmlFor="category" className="block text-sm font-medium">
									Category
								</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Select category" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All Categories</SelectItem>
										<SelectItem value="pets">Pets</SelectItem>
										<SelectItem value="vehicles">Vehicles</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div>
								<Label htmlFor="rarity" className="block text-sm font-medium">
									Rarity
								</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Select rarity" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All Rarities</SelectItem>
										<SelectItem value="common">Common</SelectItem>
										<SelectItem value="uncommon">Uncommon</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						{/* Glow Effect (Checkboxes) */}
						<div>
							<Label className="block text-sm font-medium">Glow Effect</Label>
							<div className="grid grid-cols-2 gap-4">
								<div className="flex items-center space-x-2">
									<Checkbox id="neon" />
									<Label htmlFor="neon">Neon</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="mega-neon" />
									<Label htmlFor="mega-neon">Mega Neon</Label>
								</div>
							</div>
						</div>

						{/* Special Attributes (Checkboxes) */}
						<div>
							<Label className="block text-sm font-medium">
								Special Attributes
							</Label>
							<div className="grid grid-cols-2 gap-4">
								<div className="flex items-center space-x-2">
									<Checkbox id="flyable" />
									<Label htmlFor="flyable">Flyable</Label>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox id="rideable" />
									<Label htmlFor="rideable">Rideable</Label>
								</div>
							</div>
						</div>

						{/* Search Button */}
						<Button className="w-full">Search</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
