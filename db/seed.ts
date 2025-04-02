import { db } from "./db";
import { games, categories, rarityTypes, items } from "./schema";
import "dotenv/config";
const IMAGE_URL =
	"https://azajw5rq3c.ufs.sh/f/YevQZiVtNMeOYEayMHVtNMeOHxsVPkDBrnW6R7gTU3bAIL4w";
export async function seedAdoptMe() {
	console.log(process.env.DATABASE_URL);
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

	// 3. Add Base Rarities
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

	const rarityMap: { [key: string]: number } = {};
	for (const rarity of raritiesData) {
		const [insertedRarity] = await db
			.insert(rarityTypes)
			.values({
				gameId,
				name: rarity.name,
				displayName: rarity.displayName,
				colorHex: rarity.colorHex,
				sortOrder: rarity.id,
			})
			.returning();
		rarityMap[rarity.name.toLowerCase().replace(/ /g, "-")] = insertedRarity.id; // Normalize keys for matching
	}
	console.log(`Added ${raritiesData.length} base rarity types`);

	// 4. Add Items with their BASE rarities
	const itemsData = [
		// Pets
		{
			categoryId: 4,
			slug: "shadow-dragon",
			name: "Shadow Dragon",
			description: "A pet from the Halloween Event 2019",
			imageUrl: "http://localhost/images/adopt-me/shadow-dragon.webp",
			suggestedPrice: 5000,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "frost-dragon",
			name: "Frost Dragon",
			description: "A pet from the Winter Holiday 2019 event",
			imageUrl: "http://localhost/images/adopt-me/frost-dragon.webp",
			suggestedPrice: 4200,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "giraffe",
			name: "Giraffe",
			description: "A pet from the Safari Egg",
			imageUrl: "http://localhost/images/adopt-me/giraffe.webp",
			suggestedPrice: 4800,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "bat-dragon",
			name: "Bat Dragon",
			description: "A pet from the Halloween Event 2019",
			imageUrl: "http://localhost/images/adopt-me/bat-dragon.webp",
			suggestedPrice: 4500,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "owl",
			name: "Owl",
			description: "A pet from the Farm Egg",
			imageUrl: "http://localhost/images/adopt-me/owl.webp",
			suggestedPrice: 3800,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "parrot",
			name: "Parrot",
			description: "A pet from the Jungle Egg",
			imageUrl: "http://localhost/images/adopt-me/parrot.webp",
			suggestedPrice: 3500,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "evil-unicorn",
			name: "Evil Unicorn",
			description: "A pet from the Halloween Event 2019",
			imageUrl: "http://localhost/images/adopt-me/evil-unicorn.webp",
			suggestedPrice: 3400,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "crow",
			name: "Crow",
			description: "A pet from the Farm Egg",
			imageUrl: "http://localhost/images/adopt-me/crow.webp",
			suggestedPrice: 3300,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "king-monkey",
			name: "King Monkey",
			description: "A pet from the Monkey Fairground event",
			imageUrl: "http://localhost/images/adopt-me/king-monkey.webp",
			suggestedPrice: 2800,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "albino-monkey",
			name: "Albino Monkey",
			description: "A pet from the Monkey Fairground event",
			imageUrl: "http://localhost/images/adopt-me/albino-monkey.webp",
			suggestedPrice: 2500,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "diamond-unicorn",
			name: "Diamond Unicorn",
			description: "A pet from the Diamond Egg",
			imageUrl: "http://localhost/images/adopt-me/diamond-unicorn.webp",
			suggestedPrice: 3000,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "queen-bee",
			name: "Queen Bee",
			description: "A pet from honey",
			imageUrl: "http://localhost/images/adopt-me/queen-bee.webp",
			suggestedPrice: 2200,
			rarity: "Legendary",
		},
		{
			categoryId: 4,
			slug: "dalmatian",
			name: "Dalmatian",
			description: "A pet from the Christmas Event 2019",
			imageUrl: "http://localhost/images/adopt-me/dalmatian.webp",
			suggestedPrice: 1800,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 4,
			slug: "hedgehog",
			name: "Hedgehog",
			description: "A pet from the Christmas Event 2019",
			imageUrl: "http://localhost/images/adopt-me/hedgehog.webp",
			suggestedPrice: 2000,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 4,
			slug: "flamingo",
			name: "Flamingo",
			description: "A pet from the Safari Egg",
			imageUrl: "http://localhost/images/adopt-me/flamingo.webp",
			suggestedPrice: 1900,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 4,
			slug: "lion",
			name: "Lion",
			description: "A pet from the Safari Egg",
			imageUrl: "http://localhost/images/adopt-me/lion.webp",
			suggestedPrice: 1850,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 4,
			slug: "blue-dog",
			name: "Blue Dog",
			description: "The first pet in Adopt Me, from the Blue Egg",
			imageUrl: "http://localhost/images/adopt-me/blue-dog.webp",
			suggestedPrice: 2100,
			rarity: "Uncommon",
		},
		{
			categoryId: 4,
			slug: "pink-cat",
			name: "Pink Cat",
			description: "A pet from the Pink Egg",
			imageUrl: "http://localhost/images/adopt-me/pink-cat.webp",
			suggestedPrice: 1600,
			rarity: "Uncommon",
		},
		{
			categoryId: 4,
			slug: "brown-bear",
			name: "Brown Bear",
			description: "A pet from the Christmas Event 2019",
			imageUrl: "http://localhost/images/adopt-me/brown-bear.webp",
			suggestedPrice: 950,
			rarity: "Rare",
		},
		{
			categoryId: 4,
			slug: "polar-bear",
			name: "Polar Bear",
			description: "A pet from the Christmas Event 2019",
			imageUrl: "http://localhost/images/adopt-me/polar-bear.webp",
			suggestedPrice: 900,
			rarity: "Rare",
		},
		{
			categoryId: 4,
			slug: "cow",
			name: "Cow",
			description: "A pet from the Farm Egg",
			imageUrl: "http://localhost/images/adopt-me/cow.webp",
			suggestedPrice: 1200,
			rarity: "Rare",
		},
		{
			categoryId: 4,
			slug: "hyena",
			name: "Hyena",
			description: "A pet from the Safari Egg",
			imageUrl: "http://localhost/images/adopt-me/hyena.webp",
			suggestedPrice: 1100,
			rarity: "Rare",
		},
		{
			categoryId: 4,
			slug: "beaver",
			name: "Beaver",
			description: "An uncommon pet",
			imageUrl: "http://localhost/images/adopt-me/beaver.webp",
			suggestedPrice: 150,
			rarity: "Uncommon",
		},
		{
			categoryId: 4,
			slug: "bunny",
			name: "Bunny",
			description: "A common pet",
			imageUrl: "http://localhost/images/adopt-me/bunny.webp",
			suggestedPrice: 100,
			rarity: "Common",
		},
		{
			categoryId: 4,
			slug: "chicken",
			name: "Chicken",
			description: "A common pet",
			imageUrl: "http://localhost/images/adopt-me/chicken.webp",
			suggestedPrice: 80,
			rarity: "Common",
		},
		{
			categoryId: 4,
			slug: "dog",
			name: "Dog",
			description: "A common pet",
			imageUrl: "http://localhost/images/adopt-me/dog.webp",
			suggestedPrice: 50,
			rarity: "Common",
		},
		{
			categoryId: 4,
			slug: "cat",
			name: "Cat",
			description: "A common pet",
			imageUrl: "http://localhost/images/adopt-me/cat.webp",
			suggestedPrice: 60,
			rarity: "Common",
		},
		{
			categoryId: 4,
			slug: "robin",
			name: "Robin",
			description: "An uncommon pet",
			imageUrl: "http://localhost/images/adopt-me/robin.webp",
			suggestedPrice: 120,
			rarity: "Uncommon",
		},
		{
			categoryId: 4,
			slug: "puma",
			name: "Puma",
			description: "An uncommon pet",
			imageUrl: "http://localhost/images/adopt-me/puma.webp",
			suggestedPrice: 130,
			rarity: "Uncommon",
		},
		{
			categoryId: 4,
			slug: "snow-cat",
			name: "Snow Cat",
			description: "An uncommon pet",
			imageUrl: "http://localhost/images/adopt-me/snow-cat.webp",
			suggestedPrice: 140,
			rarity: "Uncommon",
		},
		{
			categoryId: 4,
			slug: "stegosaurus",
			name: "Stegosaurus",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/stegosaurus.webp",
			suggestedPrice: 300,
			rarity: "Rare",
		},
		{
			categoryId: 4,
			slug: "triceratops",
			name: "Triceratops",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/triceratops.webp",
			suggestedPrice: 320,
			rarity: "Rare",
		},
		{
			categoryId: 4,
			slug: "woolly-mammoth",
			name: "Woolly Mammoth",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/woolly-mammoth.webp",
			suggestedPrice: 350,
			rarity: "Rare",
		},
		{
			categoryId: 4,
			slug: "dodo",
			name: "Dodo",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/dodo.webp",
			suggestedPrice: 800,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 4,
			slug: "t-rex",
			name: "T-Rex",
			description: "A pet from the Fossil Egg",
			imageUrl: "http://localhost/images/adopt-me/t-rex.webp",
			suggestedPrice: 900,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 4,
			slug: "albino-bat",
			name: "Albino Bat",
			description: "A pet from the Halloween Event 2020",
			imageUrl: "http://localhost/images/adopt-me/albino-bat.webp",
			suggestedPrice: 750,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 4,
			slug: "ghost-bunny",
			name: "Ghost Bunny",
			description: "A pet from the Halloween Event 2020",
			imageUrl: "http://localhost/images/adopt-me/ghost-bunny.webp",
			suggestedPrice: 400,
			rarity: "Rare",
		},
		// Vehicles
		{
			categoryId: 9,
			slug: "bathtub",
			name: "Bathtub",
			description: "A vehicle from an old gift rotation",
			imageUrl: "http://localhost/images/adopt-me/bathtub.webp",
			suggestedPrice: 2500,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 9,
			slug: "cloud-car",
			name: "Cloud Car",
			description: "A vehicle from a limited time offer",
			imageUrl: "http://localhost/images/adopt-me/cloud-car.webp",
			suggestedPrice: 2300,
			rarity: "Legendary",
		},
		{
			categoryId: 9,
			slug: "rocket-sled",
			name: "Rocket Sled",
			description: "One of the fastest vehicles in the game",
			imageUrl: "http://localhost/images/adopt-me/rocket-sled.webp",
			suggestedPrice: 2700,
			rarity: "Legendary",
		},
		{
			categoryId: 9,
			slug: "bicycle",
			name: "Bicycle",
			description: "A common vehicle",
			imageUrl: "http://localhost/images/adopt-me/bicycle.webp",
			suggestedPrice: 50,
			rarity: "Common",
		},
		{
			categoryId: 9,
			slug: "scooter",
			name: "Scooter",
			description: "An uncommon vehicle",
			imageUrl: "http://localhost/images/adopt-me/scooter.webp",
			suggestedPrice: 100,
			rarity: "Uncommon",
		},
		// Eggs
		{
			categoryId: 2,
			slug: "cracked-egg",
			name: "Cracked Egg",
			description: "A common egg",
			imageUrl: "http://localhost/images/adopt-me/cracked-egg.webp",
			suggestedPrice: 350,
			rarity: "Common",
		},
		{
			categoryId: 2,
			slug: "pet-egg",
			name: "Pet Egg",
			description: "An uncommon egg",
			imageUrl: "http://localhost/images/adopt-me/pet-egg.webp",
			suggestedPrice: 600,
			rarity: "Uncommon",
		},
		{
			categoryId: 2,
			slug: "royal-egg",
			name: "Royal Egg",
			description: "A rare egg",
			imageUrl: "http://localhost/images/adopt-me/royal-egg.webp",
			suggestedPrice: 1450,
			rarity: "Rare",
		},
		{
			categoryId: 2,
			slug: "fossil-egg",
			name: "Fossil Egg",
			description: "An ultra-rare egg that hatches fossil pets",
			imageUrl: "http://localhost/images/adopt-me/fossil-egg.webp",
			suggestedPrice: 750,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 2,
			slug: "ocean-egg",
			name: "Ocean Egg",
			description: "An ultra-rare egg that hatches ocean pets",
			imageUrl: "http://localhost/images/adopt-me/ocean-egg.webp",
			suggestedPrice: 750,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 2,
			slug: "safari-egg",
			name: "Safari Egg",
			description: "A legendary egg with rare pets",
			imageUrl: "http://localhost/images/adopt-me/safari-egg.webp",
			suggestedPrice: 1800,
			rarity: "Legendary",
		},
		{
			categoryId: 2,
			slug: "jungle-egg",
			name: "Jungle Egg",
			description: "A legendary egg with exotic pets",
			imageUrl: "http://localhost/images/adopt-me/jungle-egg.webp",
			suggestedPrice: 1700,
			rarity: "Legendary",
		},
		{
			categoryId: 2,
			slug: "farm-egg",
			name: "Farm Egg",
			description: "A legendary egg with farm animals",
			imageUrl: "http://localhost/images/adopt-me/farm-egg.webp",
			suggestedPrice: 1600,
			rarity: "Legendary",
		},
		{
			categoryId: 2,
			slug: "blue-egg",
			name: "Blue Egg",
			description: "The first egg in Adopt Me",
			imageUrl: "http://localhost/images/adopt-me/blue-egg.webp",
			suggestedPrice: 2500,
			rarity: "Uncommon",
		},
		{
			categoryId: 2,
			slug: "pink-egg",
			name: "Pink Egg",
			description: "An early egg in Adopt Me",
			imageUrl: "http://localhost/images/adopt-me/pink-egg.webp",
			suggestedPrice: 2300,
			rarity: "Uncommon",
		},
		{
			categoryId: 2,
			slug: "christmas-egg-2019",
			name: "Christmas Egg 2019",
			description: "An event-limited egg",
			imageUrl: "http://localhost/images/adopt-me/christmas-egg-2019.webp",
			suggestedPrice: 1500,
			rarity: "Rare",
		},
		{
			categoryId: 2,
			slug: "halloween-egg-2020",
			name: "Halloween Egg 2020",
			description: "An event-limited egg",
			imageUrl: "http://localhost/images/adopt-me/halloween-egg-2020.webp",
			suggestedPrice: 1200,
			rarity: "Ultra-Rare",
		},
		{
			categoryId: 2,
			slug: "monkey-egg",
			name: "Monkey Egg",
			description: "An egg from the Monkey Fairground event",
			imageUrl: "http://localhost/images/adopt-me/monkey-egg.webp",
			suggestedPrice: 650,
			rarity: "Rare",
		},
		{
			categoryId: 2,
			slug: "diamond-egg",
			name: "Diamond Egg",
			description: "A very rare egg obtained through streaks",
			imageUrl: "http://localhost/images/adopt-me/diamond-egg.webp",
			suggestedPrice: 3500,
			rarity: "Legendary",
		},
		{
			categoryId: 2,
			slug: "golden-egg",
			name: "Golden Egg",
			description: "A rare egg obtained through streaks",
			imageUrl: "http://localhost/images/adopt-me/golden-egg.webp",
			suggestedPrice: 3200,
			rarity: "Legendary",
		},
		// Food
		{
			categoryId: 1,
			slug: "apple",
			name: "Apple",
			description: "A common food item",
			imageUrl: "http://localhost/images/adopt-me/apple.webp",
			suggestedPrice: 10,
			rarity: "Common",
		},
		{
			categoryId: 1,
			slug: "banana",
			name: "Banana",
			description: "A common food item",
			imageUrl: "http://localhost/images/adopt-me/banana.webp",
			suggestedPrice: 15,
			rarity: "Common",
		},
		{
			categoryId: 1,
			slug: "carrot",
			name: "Carrot",
			description: "An uncommon food item",
			imageUrl: "http://localhost/images/adopt-me/carrot.webp",
			suggestedPrice: 20,
			rarity: "Uncommon",
		},
		{
			categoryId: 1,
			slug: "honey",
			name: "Honey",
			description: "A rare food item that attracts bees",
			imageUrl: "http://localhost/images/adopt-me/honey.webp",
			suggestedPrice: 500,
			rarity: "Rare",
		},
		// Toys
		{
			categoryId: 8,
			slug: "rubber-duck",
			name: "Rubber Duck",
			description: "A common toy",
			imageUrl: "http://localhost/images/adopt-me/rubber-duck.webp",
			suggestedPrice: 5,
			rarity: "Common",
		},
		{
			categoryId: 8,
			slug: "ball",
			name: "Ball",
			description: "An uncommon toy",
			imageUrl: "http://localhost/images/adopt-me/ball.webp",
			suggestedPrice: 10,
			rarity: "Uncommon",
		},
		{
			categoryId: 8,
			slug: "frisbee",
			name: "Frisbee",
			description: "A rare toy",
			imageUrl: "http://localhost/images/adopt-me/frisbee.webp",
			suggestedPrice: 25,
			rarity: "Rare",
		},
		{
			categoryId: 8,
			slug: "grappling-hook",
			name: "Grappling Hook",
			description: "An ultra-rare toy",
			imageUrl: "http://localhost/images/adopt-me/grappling-hook.webp",
			suggestedPrice: 100,
			rarity: "Ultra-Rare",
		},
		// Gifts
		{
			categoryId: 3,
			slug: "small-gift",
			name: "Small Gift",
			description: "A common gift",
			imageUrl: "http://localhost/images/adopt-me/small-gift.webp",
			suggestedPrice: 150,
			rarity: "Common",
		},
		{
			categoryId: 3,
			slug: "medium-gift",
			name: "Medium Gift",
			description: "An uncommon gift",
			imageUrl: "http://localhost/images/adopt-me/medium-gift.webp",
			suggestedPrice: 400,
			rarity: "Uncommon",
		},
		{
			categoryId: 3,
			slug: "big-gift",
			name: "Big Gift",
			description: "A rare gift",
			imageUrl: "http://localhost/images/adopt-me/big-gift.webp",
			suggestedPrice: 1200,
			rarity: "Rare",
		},
		{
			categoryId: 3,
			slug: "star-reward-gift",
			name: "Star Reward Gift",
			description: "A gift obtained from star rewards",
			imageUrl: "http://localhost/images/adopt-me/star-reward-gift.webp",
			suggestedPrice: 800,
			rarity: "Ultra-Rare",
		},
	];

	for (const item of itemsData) {
		const rarityKey = item.rarity.toLowerCase().replace(/ /g, "-");
		const rarityId = rarityMap[rarityKey];
		if (!rarityId) {
			console.warn(
				`Rarity "${item.rarity}" (key: ${rarityKey}) not found for item "${item.name}"`,
			);
			continue;
		}
		await db.insert(items).values({
			gameId,
			categoryId: item.categoryId,
			name: item.name,
			description: item.description,
			imageUrl: item.imageUrl,
			suggestedPrice: item.suggestedPrice,
			slug: item.slug,
			rarityTypeId: rarityId, // Assign the base rarity ID
		});
	}
	console.log(`Added ${itemsData.length} items`);

	console.log("Adopt Me data seeding completed.");
}

async function updateImage() {
	await db.update(items).set({
		imageUrl: IMAGE_URL,
	});
	console.log("Image updated");
}

// seedAdoptMe();
updateImage();
