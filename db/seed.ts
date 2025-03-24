import { db } from "./db";
import { games, categories, rarityTypes, items } from "./schema";

const IMAGE_URL =
	"https://azajw5rq3c.ufs.sh/f/YevQZiVtNMeOYEayMHVtNMeOHxsVPkDBrnW6R7gTU3bAIL4w";
export async function seedAdoptMe() {
	console.log("Seeding Adopt Me data...");

	// 1. Add Adopt Me game
	const [adoptMeGame] = await db
		.insert(games)
		.values({
			name: "Adopt Me (Roblox)",
			description:
				"A popular pet simulation game on the Roblox platform where players can adopt and raise pets.",
			logoUrl: "http://localhost/images/adopt-me/logo.webp",
			isActive: true,
			sortOrder: 1,
		})
		.returning();

	const gameId = adoptMeGame.id;
	console.log(`Created game with ID: ${gameId}`);

	// 2. Add Categories
	const categoriesData = [
		{
			id: 1,
			name: "Pets",
			description:
				"Adoptable pets that can be hatched from eggs or obtained through trading",
		},
		{
			id: 2,
			name: "Pet Accessories",
			description: "Items that can be worn by pets",
		},
		{ id: 3, name: "Food", description: "Items that can be consumed by pets" },
		{
			id: 4,
			name: "Toys",
			description: "Items that can be played with by pets or players",
		},
		{
			id: 5,
			name: "Vehicles",
			description: "Transportation items for players",
		},
		{ id: 6, name: "Strollers", description: "Items used to carry pets" },
		{
			id: 7,
			name: "Gifts",
			description: "Mystery boxes that contain random items",
		},
	];

	for (const category of categoriesData) {
		await db.insert(categories).values({
			gameId,
			name: category.name,
			description: category.description,
			sortOrder: category.id,
		});
	}
	console.log(`Added ${categoriesData.length} categories`);

	// 3. Add Rarities
	const raritiesData = [
		{ id: 1, name: "Common", displayName: "Common", colorHex: "#CCCCCC" },
		{ id: 2, name: "Uncommon", displayName: "Uncommon", colorHex: "#00FF00" },
		{ id: 3, name: "Rare", displayName: "Rare", colorHex: "#0000FF" },
		{
			id: 4,
			name: "Ultra-Rare",
			displayName: "Ultra-Rare",
			colorHex: "#800080",
		},
		{ id: 5, name: "Legendary", displayName: "Legendary", colorHex: "#FFA500" },
		{ id: 6, name: "Limited", displayName: "Limited", colorHex: "#FF0000" },
		{ id: 7, name: "Event", displayName: "Event", colorHex: "#FFFF00" },
		{ id: 8, name: "Neon", displayName: "Neon ✨", colorHex: "#FF00FF" },
		{
			id: 9,
			name: "Mega Neon",
			displayName: "Mega Neon 🌈",
			colorHex: "#FF0000",
		},
	];

	for (const rarity of raritiesData) {
		await db.insert(rarityTypes).values({
			gameId,
			name: rarity.name,
			displayName: rarity.displayName,
			colorHex: rarity.colorHex,
			sortOrder: rarity.id,
		});
	}
	console.log(`Added ${raritiesData.length} rarity types`);

	// 4. Add Items
	const itemsData = [
		// Legendary Pets
		{
			categoryId: 1,
			name: "Shadow Dragon",
			description: "A legendary pet from the Halloween Event 2019",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/shadow-dragon.webp",
			suggestedPrice: 5000,
		},
		{
			categoryId: 1,
			name: "Frost Dragon",
			description: "A legendary pet from the Winter Holiday 2019 event",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/frost-dragon.webp",
			suggestedPrice: 4200,
		},
		{
			categoryId: 1,
			name: "Giraffe",
			description: "A legendary pet from the Safari Egg",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/giraffe.webp",
			suggestedPrice: 4800,
		},
		{
			categoryId: 1,
			name: "Bat Dragon",
			description: "A legendary pet from the Halloween Event 2019",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/bat-dragon.webp",
			suggestedPrice: 4500,
		},
		{
			categoryId: 1,
			name: "Owl",
			description: "A legendary pet from the Farm Egg",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/owl.webp",
			suggestedPrice: 3800,
		},
		{
			categoryId: 1,
			name: "Parrot",
			description: "A legendary pet from the Jungle Egg",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/parrot.webp",
			suggestedPrice: 3500,
		},
		{
			categoryId: 1,
			name: "Evil Unicorn",
			description: "A legendary pet from the Halloween Event 2019",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/evil-unicorn.webp",
			suggestedPrice: 3400,
		},
		{
			categoryId: 1,
			name: "Crow",
			description: "A legendary pet from the Farm Egg",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/crow.webp",
			suggestedPrice: 3300,
		},
		{
			categoryId: 1,
			name: "King Monkey",
			description: "A legendary pet from the Monkey Fairground event",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/king-monkey.webp",
			suggestedPrice: 2800,
		},
		{
			categoryId: 1,
			name: "Albino Monkey",
			description: "A legendary pet from the Monkey Fairground event",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/albino-monkey.webp",
			suggestedPrice: 2500,
		},
		{
			categoryId: 1,
			name: "Diamond Unicorn",
			description: "A legendary pet from the Diamond Egg",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/diamond-unicorn.webp",
			suggestedPrice: 3000,
		},
		{
			categoryId: 1,
			name: "Queen Bee",
			description: "A legendary pet from honey",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/queen-bee.webp",
			suggestedPrice: 2200,
		},

		// Ultra-Rare Pets
		{
			categoryId: 1,
			name: "Dalmatian",
			description: "An ultra-rare pet from the Christmas Event 2019",
			rarityId: 4,
			imageUrl: "http://localhost/images/adopt-me/dalmatian.webp",
			suggestedPrice: 1800,
		},
		{
			categoryId: 1,
			name: "Hedgehog",
			description: "An ultra-rare pet from the Christmas Event 2019",
			rarityId: 4,
			imageUrl: "http://localhost/images/adopt-me/hedgehog.webp",
			suggestedPrice: 2000,
		},
		{
			categoryId: 1,
			name: "Flamingo",
			description: "An ultra-rare pet from the Safari Egg",
			rarityId: 4,
			imageUrl: "http://localhost/images/adopt-me/flamingo.webp",
			suggestedPrice: 1900,
		},
		{
			categoryId: 1,
			name: "Lion",
			description: "An ultra-rare pet from the Safari Egg",
			rarityId: 4,
			imageUrl: "http://localhost/images/adopt-me/lion.webp",
			suggestedPrice: 1850,
		},
		{
			categoryId: 1,
			name: "Blue Dog",
			description: "The first pet in Adopt Me, from the Blue Egg",
			rarityId: 4,
			imageUrl: "http://localhost/images/adopt-me/blue-dog.webp",
			suggestedPrice: 2100,
		},
		{
			categoryId: 1,
			name: "Pink Cat",
			description: "An ultra-rare pet from the Pink Egg",
			rarityId: 4,
			imageUrl: "http://localhost/images/adopt-me/pink-cat.webp",
			suggestedPrice: 1600,
		},

		// Rare Pets
		{
			categoryId: 1,
			name: "Brown Bear",
			description: "A rare pet from the Christmas Event 2019",
			rarityId: 3,
			imageUrl: "http://localhost/images/adopt-me/brown-bear.webp",
			suggestedPrice: 950,
		},
		{
			categoryId: 1,
			name: "Polar Bear",
			description: "A rare pet from the Christmas Event 2019",
			rarityId: 3,
			imageUrl: "http://localhost/images/adopt-me/polar-bear.webp",
			suggestedPrice: 900,
		},
		{
			categoryId: 1,
			name: "Cow",
			description: "A rare pet from the Farm Egg",
			rarityId: 3,
			imageUrl: "http://localhost/images/adopt-me/cow.webp",
			suggestedPrice: 1200,
		},
		{
			categoryId: 1,
			name: "Hyena",
			description: "A rare pet from the Safari Egg",
			rarityId: 3,
			imageUrl: "http://localhost/images/adopt-me/hyena.webp",
			suggestedPrice: 1100,
		},

		// Neon Legendary Pets
		{
			categoryId: 1,
			name: "Neon Shadow Dragon",
			description: "A neon version of the Shadow Dragon",
			rarityId: 8,
			imageUrl: "http://localhost/images/adopt-me/neon-shadow-dragon.webp",
			suggestedPrice: 20000,
		},
		{
			categoryId: 1,
			name: "Neon Frost Dragon",
			description: "A neon version of the Frost Dragon",
			rarityId: 8,
			imageUrl: "http://localhost/images/adopt-me/neon-frost-dragon.webp",
			suggestedPrice: 16800,
		},
		{
			categoryId: 1,
			name: "Neon Giraffe",
			description: "A neon version of the Giraffe",
			rarityId: 8,
			imageUrl: "http://localhost/images/adopt-me/neon-giraffe.webp",
			suggestedPrice: 19200,
		},

		// Mega Neon Legendary Pets
		{
			categoryId: 1,
			name: "Mega Neon Shadow Dragon",
			description: "A mega neon version of the Shadow Dragon",
			rarityId: 9,
			imageUrl: "http://localhost/images/adopt-me/mega-neon-shadow-dragon.webp",
			suggestedPrice: 80000,
		},
		{
			categoryId: 1,
			name: "Mega Neon Frost Dragon",
			description: "A mega neon version of the Frost Dragon",
			rarityId: 9,
			imageUrl: "http://localhost/images/adopt-me/mega-neon-frost-dragon.webp",
			suggestedPrice: 67200,
		},

		// Vehicles
		{
			categoryId: 5,
			name: "Bathtub",
			description: "A legendary vehicle from an old gift rotation",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/bathtub.webp",
			suggestedPrice: 2500,
		},
		{
			categoryId: 5,
			name: "Cloud Car",
			description: "A legendary vehicle from a limited time offer",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/cloud-car.webp",
			suggestedPrice: 2300,
		},
		{
			categoryId: 5,
			name: "Rocket Sled",
			description: "One of the fastest vehicles in the game",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/rocket-sled.webp",
			suggestedPrice: 2700,
		},

		// Pet Accessories
		{
			categoryId: 2,
			name: "Shadow Aura",
			description: "A glowing dark aura pet accessory",
			rarityId: 4,
			imageUrl: "http://localhost/images/adopt-me/shadow-aura.webp",
			suggestedPrice: 600,
		},
		{
			categoryId: 2,
			name: "Bone Wings",
			description: "Skeletal wings for pets",
			rarityId: 4,
			imageUrl: "http://localhost/images/adopt-me/bone-wings.webp",
			suggestedPrice: 550,
		},
		{
			categoryId: 2,
			name: "Rainbow Ruff",
			description: "A colorful neck accessory",
			rarityId: 4,
			imageUrl: "http://localhost/images/adopt-me/rainbow-ruff.webp",
			suggestedPrice: 500,
		},

		// Toys
		{
			categoryId: 4,
			name: "Tombstone",
			description:
				"Makes players and pets invisible, from Halloween Event 2019",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/tombstone.webp",
			suggestedPrice: 3000,
		},
		{
			categoryId: 4,
			name: "Candy Cannon",
			description:
				"Shoots candies that can be collected, from Halloween Event 2019",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/candy-cannon.webp",
			suggestedPrice: 3200,
		},
		{
			categoryId: 4,
			name: "Broomstick",
			description: "Allows players to fly, from Halloween Event 2019",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/broomstick.webp",
			suggestedPrice: 2800,
		},

		// Strollers
		{
			categoryId: 6,
			name: "Cloud Stroller",
			description: "A floating cloud stroller",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/cloud-stroller.webp",
			suggestedPrice: 1800,
		},
		{
			categoryId: 6,
			name: "Trike Stroller",
			description: "A rare three-wheeled stroller",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/trike-stroller.webp",
			suggestedPrice: 1500,
		},
		{
			categoryId: 6,
			name: "Cannon Stroller",
			description: "A stroller shaped like a cannon",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/cannon-stroller.webp",
			suggestedPrice: 1400,
		},

		// Food
		{
			categoryId: 3,
			name: "Rainbow Stew",
			description: "A colorful food item for pets",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/rainbow-stew.webp",
			suggestedPrice: 800,
		},
		{
			categoryId: 3,
			name: "Hyperspeed Potion",
			description: "Makes pets temporarily faster",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/hyperspeed-potion.webp",
			suggestedPrice: 750,
		},
		{
			categoryId: 3,
			name: "Cure All Potion",
			description: "Cures all pet ailments",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/cure-all-potion.webp",
			suggestedPrice: 700,
		},

		// Gifts
		{
			categoryId: 7,
			name: "Safari Egg",
			description: "A rare egg containing Safari pets, no longer available",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/safari-egg.webp",
			suggestedPrice: 3500,
		},
		{
			categoryId: 7,
			name: "Farm Egg",
			description: "An egg containing Farm pets, no longer available",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/farm-egg.webp",
			suggestedPrice: 2800,
		},
		{
			categoryId: 7,
			name: "Jungle Egg",
			description: "An egg containing Jungle pets, no longer available",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/jungle-egg.webp",
			suggestedPrice: 2500,
		},
		{
			categoryId: 7,
			name: "Christmas Egg",
			description: "A festive egg from Christmas 2019",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/christmas-egg.webp",
			suggestedPrice: 2200,
		},
		{
			categoryId: 7,
			name: "Blue Egg",
			description: "One of the first eggs in Adopt Me",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/blue-egg.webp",
			suggestedPrice: 3000,
		},
		{
			categoryId: 7,
			name: "Pink Egg",
			description: "One of the first eggs in Adopt Me",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/pink-egg.webp",
			suggestedPrice: 2900,
		},
		{
			categoryId: 7,
			name: "Golden Egg",
			description: "A rare golden egg from the Star Rewards",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/golden-egg.webp",
			suggestedPrice: 1600,
		},
		{
			categoryId: 7,
			name: "Diamond Egg",
			description: "The rarest egg from the Star Rewards",
			rarityId: 5,
			imageUrl: "http://localhost/images/adopt-me/diamond-egg.webp",
			suggestedPrice: 2400,
		},
	];

	for (const item of itemsData) {
		await db.insert(items).values({
			gameId,
			categoryId: item.categoryId,
			name: item.name,
			description: item.description,
			rarityId: item.rarityId,
			imageUrl: "https://azajw5rq3c.ufs.sh/f/YevQZiVtNMeOYEayMHVtNMeOHxsVPkDBrnW6R7gTU3bAIL4w",
			suggestedPrice: item.suggestedPrice,
			metadata: JSON.stringify({
				isNeon: item.name.includes("Neon") && !item.name.includes("Mega"),
				isMegaNeon: item.name.includes("Mega Neon"),
				
			}),
			isActive: true,
		});
	}

	console.log(`Added ${itemsData.length} items`);
	console.log("Adopt Me seed completed!");
}

seedAdoptMe();
