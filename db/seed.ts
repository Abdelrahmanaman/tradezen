import { db } from "./db";
import { games, categories, rarityTypes, items, listings } from "./schema";

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
		{ id: 1, name: "Food", description: "Items that can be consumed by pets" },
		{ id: 2, name: "Eggs", description: "Items that hatch into pets" },
		{
			id: 3,
			name: "Gifts",
			description: "Mystery boxes that contain random items",
		},
		{
			id: 4,
			name: "Pets",
			description: "Adoptable pets that can be hatched or traded",
		},
		{
			id: 5,
			name: "Pet Accessories",
			description: "A broad category for pet-related accessories and gear",
		},
		{
			id: 6,
			name: "Services",
			description: "In-game services (if applicable)",
		},
		{ id: 7, name: "Strollers", description: "Items used to carry pets" },
		{
			id: 8,
			name: "Toys",
			description: "Items that can be played with by pets or players",
		},
		{
			id: 9,
			name: "Vehicles",
			description: "Transportation items for players",
		},
		{ id: 10, name: "Houses", description: "Customizable player homes" },
		{
			id: 11,
			name: "Stickers",
			description: "Collectible stickers (if applicable)",
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
		// Pets
		{
			categoryId: 4,
			name: "Shadow Dragon",
			description: "A pet from the Halloween Event 2019",
			imageUrl: "http://localhost/images/adopt-me/shadow-dragon.webp",
			suggestedPrice: 5000,
		},
		{
			categoryId: 4,
			name: "Frost Dragon",
			description: "A pet from the Winter Holiday 2019 event",
			imageUrl: "http://localhost/images/adopt-me/frost-dragon.webp",
			suggestedPrice: 4200,
		},
		{
			categoryId: 4,
			name: "Giraffe",
			description: "A pet from the Safari Egg",
			imageUrl: "http://localhost/images/adopt-me/giraffe.webp",
			suggestedPrice: 4800,
		},
		{
			categoryId: 4,
			name: "Bat Dragon",
			description: "A pet from the Halloween Event 2019",
			imageUrl: "http://localhost/images/adopt-me/bat-dragon.webp",
			suggestedPrice: 4500,
		},
		{
			categoryId: 4,
			name: "Owl",
			description: "A pet from the Farm Egg",
			imageUrl: "http://localhost/images/adopt-me/owl.webp",
			suggestedPrice: 3800,
		},
		{
			categoryId: 4,
			name: "Parrot",
			description: "A pet from the Jungle Egg",
			imageUrl: "http://localhost/images/adopt-me/parrot.webp",
			suggestedPrice: 3500,
		},
		{
			categoryId: 4,
			name: "Evil Unicorn",
			description: "A pet from the Halloween Event 2019",
			imageUrl: "http://localhost/images/adopt-me/evil-unicorn.webp",
			suggestedPrice: 3400,
		},
		{
			categoryId: 4,
			name: "Crow",
			description: "A pet from the Farm Egg",
			imageUrl: "http://localhost/images/adopt-me/crow.webp",
			suggestedPrice: 3300,
		},
		{
			categoryId: 4,
			name: "King Monkey",
			description: "A pet from the Monkey Fairground event",
			imageUrl: "http://localhost/images/adopt-me/king-monkey.webp",
			suggestedPrice: 2800,
		},
		{
			categoryId: 4,
			name: "Albino Monkey",
			description: "A pet from the Monkey Fairground event",
			imageUrl: "http://localhost/images/adopt-me/albino-monkey.webp",
			suggestedPrice: 2500,
		},
		{
			categoryId: 4,
			name: "Diamond Unicorn",
			description: "A pet from the Diamond Egg",
			imageUrl: "http://localhost/images/adopt-me/diamond-unicorn.webp",
			suggestedPrice: 3000,
		},
		{
			categoryId: 4,
			name: "Queen Bee",
			description: "A pet from honey",
			imageUrl: "http://localhost/images/adopt-me/queen-bee.webp",
			suggestedPrice: 2200,
		},
		{
			categoryId: 4,
			name: "Dalmatian",
			description: "A pet from the Christmas Event 2019",
			imageUrl: "http://localhost/images/adopt-me/dalmatian.webp",
			suggestedPrice: 1800,
		},
		{
			categoryId: 4,
			name: "Hedgehog",
			description: "A pet from the Christmas Event 2019",
			imageUrl: "http://localhost/images/adopt-me/hedgehog.webp",
			suggestedPrice: 2000,
		},
		{
			categoryId: 4,
			name: "Flamingo",
			description: "A pet from the Safari Egg",
			imageUrl: "http://localhost/images/adopt-me/flamingo.webp",
			suggestedPrice: 1900,
		},
		{
			categoryId: 4,
			name: "Lion",
			description: "A pet from the Safari Egg",
			imageUrl: "http://localhost/images/adopt-me/lion.webp",
			suggestedPrice: 1850,
		},
		{
			categoryId: 4,
			name: "Blue Dog",
			description: "The first pet in Adopt Me, from the Blue Egg",
			imageUrl: "http://localhost/images/adopt-me/blue-dog.webp",
			suggestedPrice: 2100,
		},
		{
			categoryId: 4,
			name: "Pink Cat",
			description: "A pet from the Pink Egg",
			imageUrl: "http://localhost/images/adopt-me/pink-cat.webp",
			suggestedPrice: 1600,
		},
		{
			categoryId: 4,
			name: "Brown Bear",
			description: "A pet from the Christmas Event 2019",
			imageUrl: "http://localhost/images/adopt-me/brown-bear.webp",
			suggestedPrice: 950,
		},
		{
			categoryId: 4,
			name: "Polar Bear",
			description: "A pet from the Christmas Event 2019",
			imageUrl: "http://localhost/images/adopt-me/polar-bear.webp",
			suggestedPrice: 900,
		},
		{
			categoryId: 4,
			name: "Cow",
			description: "A pet from the Farm Egg",
			imageUrl: "http://localhost/images/adopt-me/cow.webp",
			suggestedPrice: 1200,
		},
		{
			categoryId: 4,
			name: "Hyena",
			description: "A pet from the Safari Egg",
			imageUrl: "http://localhost/images/adopt-me/hyena.webp",
			suggestedPrice: 1100,
		},
		{
			categoryId: 4,
			name: "Beaver",
			description: "An uncommon pet",
			imageUrl: "http://localhost/images/adopt-me/beaver.webp",
			suggestedPrice: 150,
		},
		{
			categoryId: 4,
			name: "Bunny",
			description: "A common pet",
			imageUrl: "http://localhost/images/adopt-me/bunny.webp",
			suggestedPrice: 100,
		},
		{
			categoryId: 4,
			name: "Chicken",
			description: "A common pet",
			imageUrl: "http://localhost/images/adopt-me/chicken.webp",
			suggestedPrice: 80,
		},
		{
			categoryId: 4,
			name: "Dog",
			description: "A common pet",
			imageUrl: "http://localhost/images/adopt-me/dog.webp",
			suggestedPrice: 50,
		},
		{
			categoryId: 4,
			name: "Cat",
			description: "A common pet",
			imageUrl: "http://localhost/images/adopt-me/cat.webp",
			suggestedPrice: 60,
		},
		{
			categoryId: 4,
			name: "Robin",
			description: "An uncommon pet",
			imageUrl: "http://localhost/images/adopt-me/robin.webp",
			suggestedPrice: 120,
		},
		{
			categoryId: 4,
			name: "Puma",
			description: "An uncommon pet",
			imageUrl: "http://localhost/images/adopt-me/puma.webp",
			suggestedPrice: 130,
		},
		{
			categoryId: 4,
			name: "Snow Cat",
			description: "An uncommon pet",
			imageUrl: "http://localhost/images/adopt-me/snow-cat.webp",
			suggestedPrice: 140,
		},
		{
			categoryId: 4,
			name: "Stegosaurus",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/stegosaurus.webp",
			suggestedPrice: 300,
		},
		{
			categoryId: 4,
			name: "Triceratops",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/triceratops.webp",
			suggestedPrice: 320,
		},
		{
			categoryId: 4,
			name: "Woolly Mammoth",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/woolly-mammoth.webp",
			suggestedPrice: 350,
		},
		{
			categoryId: 4,
			name: "Dodo",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/dodo.webp",
			suggestedPrice: 800,
		},
		{
			categoryId: 4,
			name: "T-Rex",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/t-rex.webp",
			suggestedPrice: 900,
		},
		{
			categoryId: 4,
			name: "Albino Bat",
			description: "A pet from the Halloween Event 2020",
			imageUrl: "http://localhost/images/adopt-me/albino-bat.webp",
			suggestedPrice: 750,
		},
		{
			categoryId: 4,
			name: "Ghost Bunny",
			description: "A pet from the Halloween Event 2020",
			imageUrl: "http://localhost/images/adopt-me/ghost-bunny.webp",
			suggestedPrice: 400,
		},
		// Vehicles
		{
			categoryId: 9,
			name: "Bathtub",
			description: "A vehicle from an old gift rotation",
			imageUrl: "http://localhost/images/adopt-me/bathtub.webp",
			suggestedPrice: 2500,
		},
		{
			categoryId: 9,
			name: "Cloud Car",
			description: "A vehicle from a limited time offer",
			imageUrl: "http://localhost/images/adopt-me/cloud-car.webp",
			suggestedPrice: 2300,
		},
		{
			categoryId: 9,
			name: "Rocket Sled",
			description: "One of the fastest vehicles in the game",
			imageUrl: "http://localhost/images/adopt-me/rocket-sled.webp",
			suggestedPrice: 2700,
		},
		{
			categoryId: 9,
			name: "Bicycle",
			description: "A common vehicle",
			imageUrl: "http://localhost/images/adopt-me/bicycle.webp",
			suggestedPrice: 50,
		},
		{
			categoryId: 9,
			name: "Scooter",
			description: "An uncommon vehicle",
			imageUrl: "http://localhost/images/adopt-me/scooter.webp",
			suggestedPrice: 100,
		},
		// Eggs
		{
			categoryId: 2,
			name: "Cracked Egg",
			description: "A common egg",
			imageUrl: "http://localhost/images/adopt-me/cracked-egg.webp",
			suggestedPrice: 350,
		},
		{
			categoryId: 2,
			name: "Pet Egg",
			description: "An uncommon egg",
			imageUrl: "http://localhost/images/adopt-me/pet-egg.webp",
			suggestedPrice: 600,
		},
		{
			categoryId: 2,
			name: "Royal Egg",
			description: "A rare egg",
			imageUrl: "http://localhost/images/adopt-me/royal-egg.webp",
			suggestedPrice: 1450,
		},
		{
			categoryId: 3,
			name: "Safari Egg",
			description: "An egg containing Safari pets, no longer available",
			imageUrl: "http://localhost/images/adopt-me/safari-egg.webp",
			suggestedPrice: 3500,
		},
		{
			categoryId: 3,
			name: "Farm Egg",
			description: "An egg containing Farm pets, no longer available",
			imageUrl: "http://localhost/images/adopt-me/farm-egg.webp",
			suggestedPrice: 2800,
		},
		// Toys
		{
			categoryId: 8,
			name: "Tombstone",
			description:
				"Makes players and pets invisible, from Halloween Event 2019",
			imageUrl: "http://localhost/images/adopt-me/tombstone.webp",
			suggestedPrice: 3000,
		},
		{
			categoryId: 8,
			name: "Candy Cannon",
			description:
				"Shoots candies that can be collected, from Halloween Event 2019",
			imageUrl: "http://localhost/images/adopt-me/candy-cannon.webp",
			suggestedPrice: 3200,
		},
		{
			categoryId: 8,
			name: "Broomstick",
			description: "Allows players to fly, from Halloween Event 2019",
			imageUrl: "http://localhost/images/adopt-me/broomstick.webp",
			suggestedPrice: 2800,
		},
		{
			categoryId: 8,
			name: "Rubber Chicken",
			description: "A common toy",
			imageUrl: "http://localhost/images/adopt-me/rubber-chicken.webp",
			suggestedPrice: 50,
		},
		{
			categoryId: 8,
			name: "Frisbee",
			description: "An uncommon toy",
			imageUrl: "http://localhost/images/adopt-me/frisbee.webp",
			suggestedPrice: 80,
		},
		// Food
		{
			categoryId: 1,
			name: "Apple",
			description: "A common food item",
			imageUrl: "http://localhost/images/adopt-me/apple.webp",
			suggestedPrice: 10,
		},
		{
			categoryId: 1,
			name: "Carrot",
			description: "An uncommon food item",
			imageUrl: "http://localhost/images/adopt-me/carrot.webp",
			suggestedPrice: 15,
		},
		{
			categoryId: 1,
			name: "Hotdog",
			description: "A rare food item",
			imageUrl: "http://localhost/images/adopt-me/hotdog.webp",
			suggestedPrice: 20,
		},
	];

	for (const item of itemsData) {
		await db.insert(items).values({
			gameId,
			categoryId: item.categoryId,
			name: item.name,
			description: item.description,
			imageUrl:
				"https://azajw5rq3c.ufs.sh/f/YevQZiVtNMeOYEayMHVtNMeOHxsVPkDBrnW6R7gTU3bAIL4w",
			suggestedPrice: item.suggestedPrice,
			isActive: true,
		});
	}

	console.log(`Added ${itemsData.length} items`);
	console.log("Adopt Me seed completed!");
}

async function createRandomListingsForUser(gameId: number, userId: string) {
	console.log(`Creating 5 random listings for user ID: ${userId}`);

	// Fetch 5 random items for the given game
	const randomItems = await db.query.items.findMany({
		where: (items, { eq }) => eq(items.gameId, gameId),
		limit: 5,
		offset: Math.floor(Math.random() * 30), // Adjust offset for more randomness if needed
	});

	if (randomItems.length === 0) {
		console.warn("No items found for Adopt Me to create listings.");
		return;
	}

	// Fetch all rarity types for the given game
	const rarities = await db.query.rarityTypes.findMany({
		where: (rarityTypes, { eq }) => eq(rarityTypes.gameId, gameId),
	});

	for (const item of randomItems) {
		type MetaData = {
			string: boolean;
		};
		const randomPrice = Math.floor(Math.random() * 5000) + 500; // Random price
		const randomRarity = rarities[Math.floor(Math.random() * rarities.length)];
		const metadata: Record<string, boolean> = {};
		if (Math.random() > 0.5) metadata.isFlyable = true;
		if (Math.random() > 0.5) metadata.isRideable = true;
		if (Math.random() > 0.5) metadata.isNeon = true;
		if (Math.random() > 0.7) metadata.isMegaNeon = true;

		await db.insert(listings).values({
			sellerId: userId,
			itemId: item.id,
			price: randomPrice,
			quantity: 1,
			listingRarityId: randomRarity?.id,
			status: "active",
			metadata: metadata as MetaData,
		});
		console.log(`Created random listing for item: ${item.name}`);
	}

	console.log("Successfully created 5 random listings.");
}

// seedAdoptMe();

createRandomListingsForUser(1, "lOcKFwtilVElpowha4zNTht9oDaZmMTr");
