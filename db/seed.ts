import { eq } from "drizzle-orm";
import { db } from "./db";
import { items } from "./schema";

const IMAGE_URL =
	"https://azajw5rq3c.ufs.sh/f/YevQZiVtNMeOYEayMHVtNMeOHxsVPkDBrnW6R7gTU3bAIL4w";

const rarityTypeId = {
	common: 1,
	uncommon: 2,
	rare: 3,
	ultraRare: 4,
	legendary: 5,
	event: 7,
};
async function addPet() {
	for (const pet of data) {
		await db.insert(items).values({
			gameId: 1,
			name: pet.name,
			description: pet.description,
			imageUrl: IMAGE_URL,
			slug: pet.name.toLowerCase().replace(" ", "-"),
			rarityTypeId: pet.rarity,
			categoryId: 4,
		});
		console.log(`Pet added: ${pet.name}`);
	}
}

async function updateImage() {
	await db.update(items).set({
		imageUrl: IMAGE_URL,
	});
}
updateImage();

// 1. Your HTML Table String (ensure it includes the <table> tag)

type dataType = {
	name: string;
	rarity: number;
	description?: string;
};
const data: dataType[] = [
	{
		name: "Buffalo",
		rarity: 1,
		description: "",
	},
	{
		name: "Cat",
		rarity: 1,
		description: "",
	},
	{
		name: "Dog",
		rarity: 1,
		description: "",
	},
	{
		name: "Otter",
		rarity: 1,
		description: "",
	},
	{
		name: "Chicken",
		rarity: 1,
		description: "This pet can only be obtained from a Farm Egg.",
	},
	{
		name: "Robin",
		rarity: 1,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Bandicoot",
		rarity: 1,
		description: "This pet can only be obtained from an Aussie Egg.",
	},
	{
		name: "Chick",
		rarity: 1,
		description: "This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Tasmanian Tiger",
		rarity: 1,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Ground Sloth",
		rarity: 1,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Stingray",
		rarity: 1,
		description: "This pet can only be obtained from an Ocean Egg.",
	},
	{
		name: "Wolpertinger",
		rarity: 1,
		description: "This pet can only be obtained from a Mythic Egg.",
	},
	{
		name: "Walrus",
		rarity: 1,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Bullfrog",
		rarity: 1,
		description: "This pet can only be obtained from a Woodland Egg.",
	},
	{
		name: "Ant",
		rarity: 1,
		description: "",
	},
	{
		name: "Mouse",
		rarity: 1,
		description: "",
	},
	{
		name: "Dugong",
		rarity: 1,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Sado Mole",
		rarity: 1,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Bali Starling",
		rarity: 1,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Malayan Tapir",
		rarity: 1,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Maleo Bird",
		rarity: 1,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Liger",
		rarity: 1,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Mosquito",
		rarity: 1,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Piranha",
		rarity: 1,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Flying Fish",
		rarity: 1,
		description: "",
	},
	{
		name: "Bluebottle Fly",
		rarity: 1,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Mongoose",
		rarity: 1,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Cockroach",
		rarity: 1,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Beluga Whale",
		rarity: 1,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Armadillo",
		rarity: 1,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Coyote",
		rarity: 1,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Sandfish",
		rarity: 1,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Brachiosaurus",
		rarity: 1,
		description:
			"This pet can only be obtained from the Fossil Isle Excavation (2024).",
	},
	{
		name: "Garden Snake",
		rarity: 1,
		description: "This pet can only be obtained from a Garden Egg.",
	},
	{
		name: "Classic Teapot",
		rarity: 1,
		description: "",
	},
	{
		name: "Kid Goat",
		rarity: 1,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Show Pony",
		rarity: 1,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Urchin",
		rarity: 1,
		description: "",
	},
	{
		name: "Frankenfeline",
		rarity: 1,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Ratatoskr",
		rarity: 1,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Hopbop",
		rarity: 1,
		description:
			"This pet can only be obtained from a Moon Egg or Royal Moon Egg.",
	},
	{
		name: "Bakeneko",
		rarity: 1,
		description: "",
	},
	{
		name: "Burtaur",
		rarity: 1,
		description: "",
	},
	{
		name: "Blue Dog",
		rarity: 2,
		description: "This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Chocolate Labrador",
		rarity: 2,
		description: "",
	},
	{
		name: "Fennec Fox",
		rarity: 2,
		description: "",
	},
	{
		name: "Pink Cat",
		rarity: 2,
		description: "This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Puma",
		rarity: 2,
		description: "",
	},
	{
		name: "Snow Cat",
		rarity: 2,
		description: "",
	},
	{
		name: "Meerkat",
		rarity: 2,
		description: "This pet can only be obtained from a Safari Egg.",
	},
	{
		name: "Wild Boar",
		rarity: 2,
		description: "This pet can only be obtained from a Safari Egg.",
	},
	{
		name: "Black Panther",
		rarity: 2,
		description: "This pet can only be obtained from a Jungle Egg.",
	},
	{
		name: "Capybara",
		rarity: 2,
		description: "This pet can only be obtained from a Jungle Egg.",
	},
	{
		name: "Silly Duck",
		rarity: 2,
		description: "This pet can only be obtained from a Farm Egg.",
	},
	{
		name: "Drake",
		rarity: 2,
		description: "This pet can only be obtained from a Farm Egg.",
	},
	{
		name: "Wolf",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Dingo",
		rarity: 2,
		description: "This pet can only be obtained from an Aussie Egg.",
	},
	{
		name: "Pet Rock",
		rarity: 2,
		description: "",
	},
	{
		name: "Triceratops",
		rarity: 2,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Stegosaurus",
		rarity: 2,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Glyptodon",
		rarity: 2,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Bat",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Snowman",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Crab",
		rarity: 2,
		description: "This pet can only be obtained from an Ocean Egg.",
	},
	{
		name: "Dolphin",
		rarity: 2,
		description: "This pet can only be obtained from an Ocean Egg.",
	},
	{
		name: "2021 Uplift Butterfly",
		rarity: 2,
		description: "",
	},
	{
		name: "Kirin",
		rarity: 2,
		description: "This pet can only be obtained from a Mythic Egg.",
	},
	{
		name: "Halloween Black Mummy Cat",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Halloween Blue Scorpion",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Snow Leopard",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Red Cardinal",
		rarity: 2,
		description: "This pet can only be obtained from a Woodland Egg.",
	},
	{
		name: "Rock",
		rarity: 2,
		description: "",
	},
	{
		name: "Camel",
		rarity: 2,
		description: "",
	},
	{
		name: "Donkey",
		rarity: 2,
		description: "",
	},
	{
		name: "Poodle",
		rarity: 2,
		description: "",
	},
	{
		name: "2022 Uplift Butterfly",
		rarity: 2,
		description: "",
	},
	{
		name: "Rhino Beetle",
		rarity: 2,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Tanuki",
		rarity: 2,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Slug",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Chickatrice",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Therapy Dog",
		rarity: 2,
		description: "",
	},
	{
		name: "Ermine",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Amami Rabbit",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events.",
	},
	{
		name: "Frogspawn",
		rarity: 2,
		description: "",
	},
	{
		name: "Possum",
		rarity: 2,
		description: "",
	},
	{
		name: "Yellow-lipped Sea Krait",
		rarity: 2,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Banded Palm Civet",
		rarity: 2,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Angler Fish",
		rarity: 2,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Borhyaena Gigantica",
		rarity: 2,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Lobster",
		rarity: 2,
		description: "",
	},
	{
		name: "Hermit Crab",
		rarity: 2,
		description: "",
	},
	{
		name: "Arctic Tern",
		rarity: 2,
		description: "",
	},
	{
		name: "Warthog",
		rarity: 2,
		description: "",
	},
	{
		name: "Dylan",
		rarity: 2,
		description: "",
	},
	{
		name: "River",
		rarity: 2,
		description: "",
	},
	{
		name: "Pistachio",
		rarity: 2,
		description: "",
	},
	{
		name: "Birthday Butterfly 2023",
		rarity: 2,
		description: "",
	},
	{
		name: "Rock Pigeon",
		rarity: 2,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Tawny Frogmouth",
		rarity: 2,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Arctic Hare",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Harp Seal",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Eggnog Dog",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Quokka",
		rarity: 2,
		description: "",
	},
	{
		name: "Gila Monster",
		rarity: 2,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Rattlesnake",
		rarity: 2,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Mahi Mahi",
		rarity: 2,
		description: "",
	},
	{
		name: "Velociraptor",
		rarity: 2,
		description:
			"This pet can only be obtained from the Fossil Isle Excavation (2024).",
	},
	{
		name: "Mole",
		rarity: 2,
		description: "This pet can only be obtained from a Garden Egg.",
	},
	{
		name: "Rodeo Bull",
		rarity: 2,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Birthday Butterfly 2024",
		rarity: 2,
		description: "",
	},
	{
		name: "Black Marlin",
		rarity: 2,
		description: "",
	},
	{
		name: "Dracula Fish",
		rarity: 2,
		description: "",
	},
	{
		name: "Sea Skeleton Panda",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Mistletroll",
		rarity: 2,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Snorgle",
		rarity: 2,
		description:
			"This pet can only be obtained from a Moon Egg or Royal Moon Egg.",
	},
	{
		name: "Beaver",
		rarity: 3,
		description: "",
	},
	{
		name: "Rabbit",
		rarity: 3,
		description: "",
	},
	{
		name: "Elephant",
		rarity: 3,
		description: "This pet can only be obtained from a Safari Egg.",
	},
	{
		name: "Hyena",
		rarity: 3,
		description: "This pet can only be obtained from a Safari Egg.",
	},
	{
		name: "Bunny",
		rarity: 3,
		description: "",
	},
	{
		name: "Snow Puma",
		rarity: 3,
		description: "",
	},
	{
		name: "Brown Bear",
		rarity: 3,
		description: "This pet can only be obtained from a Jungle Egg.",
	},
	{
		name: "Australian Kelpie",
		rarity: 3,
		description: "This pet can only be obtained from an Aussie Egg.",
	},
	{
		name: "Cow",
		rarity: 3,
		description: "This pet can only be obtained from a Farm Egg.",
	},
	{
		name: "Pig",
		rarity: 3,
		description: "This pet can only be obtained from a Farm Egg.",
	},
	{
		name: "Swan",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Polar Bear",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Reindeer",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Shrew",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Rat",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Emu",
		rarity: 3,
		description: "This pet can only be obtained from an Aussie Egg.",
	},
	{
		name: "Monkey",
		rarity: 3,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Rhino",
		rarity: 3,
		description: "This pet can only be obtained from a Jungle Egg.",
	},
	{
		name: "Woolly Mammoth",
		rarity: 3,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Dilophosaurus",
		rarity: 3,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Pterodactyl",
		rarity: 3,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Musk Ox",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Lynx",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Ox",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Narwhal",
		rarity: 3,
		description: "This pet can only be obtained from an Ocean Egg.",
	},
	{
		name: "Seahorse",
		rarity: 3,
		description: "This pet can only be obtained from an Ocean Egg.",
	},
	{
		name: "Merhorse",
		rarity: 3,
		description: "This pet can only be obtained from a Mythic Egg.",
	},
	{
		name: "Sasquatch",
		rarity: 3,
		description: "This pet can only be obtained from a Mythic Egg.",
	},
	{
		name: "Halloween Evil Dachshund",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Halloween White Mummy Cat",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Husky",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Summer Walrus",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Lunar Tiger",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Abyssinian Cat",
		rarity: 3,
		description: "",
	},
	{
		name: "Red Fox",
		rarity: 3,
		description: "This pet can only be obtained from a Woodland Egg.",
	},
	{
		name: "Woodpecker",
		rarity: 3,
		description: "This pet can only be obtained from a Woodland Egg.",
	},
	{
		name: "Ibex",
		rarity: 3,
		description: "",
	},
	{
		name: "Orangutan",
		rarity: 3,
		description: "",
	},
	{
		name: "Parakeet",
		rarity: 3,
		description: "",
	},
	{
		name: "Zebra",
		rarity: 3,
		description: "",
	},
	{
		name: "Yellow Butterfly",
		rarity: 3,
		description: "",
	},
	{
		name: "Ibis",
		rarity: 3,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Koi Carp",
		rarity: 3,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Leopard Cat",
		rarity: 3,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Basilisk",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Ghost Wolf",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Mule",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Irish Elk",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Shetland Pony Dark Brown",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Steppe Lion",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Bloodhound",
		rarity: 3,
		description: "",
	},
	{
		name: "Black Moon Bear",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Moon Rabbit",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events.",
	},
	{
		name: "Feesh",
		rarity: 3,
		description: "",
	},
	{
		name: "Ocelot",
		rarity: 3,
		description: "",
	},
	{
		name: "Gecko",
		rarity: 3,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Tarsier",
		rarity: 3,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Goldfish",
		rarity: 3,
		description: "",
	},
	{
		name: "Gorilla",
		rarity: 3,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Hare",
		rarity: 3,
		description: "",
	},
	{
		name: "Border Collie",
		rarity: 3,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Goose",
		rarity: 3,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Pudding Cat",
		rarity: 3,
		description: "This pet can only be obtained from a Fool Egg.",
	},

	{
		name: "Hippo",
		rarity: 3,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Leopard Shark",
		rarity: 3,
		description: "",
	},
	{
		name: "Castle Hermit Crab",
		rarity: 3,
		description: "",
	},
	{
		name: "Ostrich",
		rarity: 3,
		description: "",
	},
	{
		name: "Toy Poodle",
		rarity: 3,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Indian Leopard",
		rarity: 3,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Nutcracker Squirrel",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Eggnog Hare",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Tasmanian Devil",
		rarity: 3,
		description: "",
	},
	{
		name: "Oryx",
		rarity: 3,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Thorny Devil",
		rarity: 3,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Ankylosaurus",
		rarity: 3,
		description:
			"This pet can only be obtained from the Fossil Isle Excavation (2024).",
	},
	{
		name: "Weevil",
		rarity: 3,
		description: "This pet can only be obtained from a Garden Egg.",
	},
	{
		name: "Blue Jay",
		rarity: 3,
		description: "This pet can only be obtained from a Garden Egg.",
	},
	{
		name: "Cow Calf",
		rarity: 3,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Orange Betta Fish",
		rarity: 3,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Punk Pony",
		rarity: 3,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Singularity Beetle",
		rarity: 3,
		description: "",
	},
	{
		name: "Starhopper",
		rarity: 3,
		description: "",
	},
	{
		name: "Singularity Pisces",
		rarity: 3,
		description: "",
	},
	{
		name: "Moonlight Moth",
		rarity: 3,
		description: "",
	},
	{
		name: "Sea Angel",
		rarity: 3,
		description: "",
	},
	{
		name: "Marabou Stork",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Zombie Chick",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Ice Cube",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Great Pyrenees",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Winter Fawn",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Blossom Snake",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events.",
	},
	{
		name: "Prism Snake",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events.",
	},
	{
		name: "Nebula Snake",
		rarity: 3,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events.",
	},
	{
		name: "Moonpine",
		rarity: 3,
		description:
			"This pet can only be obtained from a Moon Egg or Royal Moon Egg.",
	},
	{
		name: "Zeopod",
		rarity: 3,
		description:
			"This pet can only be obtained from a Moon Egg or Royal Moon Egg.",
	},
	{
		name: "Love Bird",
		rarity: 3,
		description: "",
	},
	{
		name: "Sweetheart Rat",
		rarity: 3,
		description: "",
	},
	{
		name: "Clover Cow",
		rarity: 3,
		description: "",
	},
	{
		name: "Shiver Wolf",
		rarity: 3,
		description: "",
	},
	{
		name: "Subzero Scorpion",
		rarity: 3,
		description: "",
	},
	{
		name: "Flamingo",
		rarity: 4,
		description: "This pet can only be obtained from a Safari Egg.",
	},
	{
		name: "Horse",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Lion",
		rarity: 4,
		description: "This pet can only be obtained from a Safari Egg.",
	},
	{
		name: "Red Panda",
		rarity: 4,
		description: "",
	},
	{
		name: "Shiba Inu",
		rarity: 4,
		description: "",
	},
	{
		name: "Penguin",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Crocodile",
		rarity: 4,
		description: "This pet can only be obtained from a Jungle Egg.",
	},
	{
		name: "Platypus",
		rarity: 4,
		description: "This pet can only be obtained from a Jungle Egg.",
	},
	{
		name: "Sloth",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Zombie Buffalo",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Bee",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Turkey",
		rarity: 4,
		description: "This pet can only be obtained from a Farm Egg.",
	},
	{
		name: "Llama",
		rarity: 4,
		description: "This pet can only be obtained from a Farm Egg.",
	},
	{
		name: "Arctic Fox",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Hedgehog",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Dalmatian",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Panda",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Koala",
		rarity: 4,
		description: "This pet can only be obtained from an Aussie Egg.",
	},
	{
		name: "Frog",
		rarity: 4,
		description: "This pet can only be obtained from an Aussie Egg.",
	},
	{
		name: "Ginger Cat",
		rarity: 4,
		description: "",
	},
	{
		name: "Toucan",
		rarity: 4,
		description: "",
	},
	{
		name: "Starfish",
		rarity: 4,
		description: "",
	},
	{
		name: "Business Monkey",
		rarity: 4,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Toy Monkey",
		rarity: 4,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Sabertooth",
		rarity: 4,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Deinonychus",
		rarity: 4,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Albino Bat",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Ghost Bunny",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Yeti",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Lunar Ox",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Ladybug",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Clownfish",
		rarity: 4,
		description: "This pet can only be obtained from an Ocean Egg.",
	},
	{
		name: "Lamb",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Red Squirrel",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Hydra",
		rarity: 4,
		description: "This pet can only be obtained from a Mythic Egg.",
	},
	{
		name: "Wyvern",
		rarity: 4,
		description: "This pet can only be obtained from a Mythic Egg.",
	},
	{
		name: "Halloween White Skeleton Dog",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Puffin",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "St Bernard",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Giant Black Scarab",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Giant Blue Scarab",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Lunar White Tiger",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Pine Marten",
		rarity: 4,
		description: "This pet can only be obtained from a Woodland Egg.",
	},
	{
		name: "Salamander",
		rarity: 4,
		description: "This pet can only be obtained from a Woodland Egg.",
	},
	{
		name: "Black Springer Spaniel",
		rarity: 4,
		description: "",
	},
	{
		name: "Brown Springer Spaniel",
		rarity: 4,
		description: "",
	},
	{
		name: "Albatross",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Ribbon Seal",
		rarity: 4,
		description: "",
	},
	{
		name: "Goat",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Space Whale",
		rarity: 4,
		description: "",
	},
	{
		name: "King Penguin",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Irish Water Spaniel",
		rarity: 4,
		description: "",
	},
	{
		name: "Robot",
		rarity: 4,
		description: "",
	},
	{
		name: "Swordfish",
		rarity: 4,
		description: "",
	},
	{
		name: "Corgi",
		rarity: 4,
		description: "",
	},
	{
		name: "Tan Chow-Chow",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Scarlet Butterfly",
		rarity: 4,
		description: "",
	},
	{
		name: "Purple Butterfly",
		rarity: 4,
		description: "",
	},
	{
		name: "Orange Butterfly",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Brown-Chested Pheasant",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Royal Corgi",
		rarity: 4,
		description: "",
	},
	{
		name: "Royal Palace Spaniel",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Orca",
		rarity: 4,
		description: "",
	},
	{
		name: "Pomeranian",
		rarity: 4,
		description: "",
	},
	{
		name: "Red Crowned Crane",
		rarity: 4,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Spider Crab",
		rarity: 4,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Trapdoor Snail",
		rarity: 4,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Evil Basilisk",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Evil Chickatrice",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Zombie Wolf",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Persian Cat",
		rarity: 4,
		description: "",
	},
	{
		name: "Ram",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Shetland Pony White",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Snowball Pet",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Ice Wolf",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Gingerbread Reindeer",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Wooly Rhino",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Highland Cow",
		rarity: 4,
		description: "",
	},
	{
		name: "Glacier Moth",
		rarity: 4,
		description: "",
	},
	{
		name: "Water Moon Bear",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Water Rabbit",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events.",
	},
	{
		name: "Sheeeeep",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Green Amazon",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Chef Gorilla",
		rarity: 4,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Karate Gorilla",
		rarity: 4,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Binturong",
		rarity: 4,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Black Macaque",
		rarity: 4,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Komodo Dragon",
		rarity: 4,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Red Sand Dollar",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "White Sand Dollar",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Wood Pigeon",
		rarity: 4,
		description: "",
	},
	{
		name: "Sprout Snail",
		rarity: 4,
		description: "This pet can only be obtained from a Fool Egg.",
	},
	{
		name: "Grinmoire",
		rarity: 4,
		description: "",
	},
	{
		name: "Blue Ringed Octopus",
		rarity: 4,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Lammergeier",
		rarity: 4,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Puffer Fish",
		rarity: 4,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Many Mackerel",
		rarity: 4,
		description: "",
	},
	{
		name: "Tortuga de la Isla",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Lion Cub",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "African Wild Dog",
		rarity: 4,
		description: "",
	},
	{
		name: "Happy Clam",
		rarity: 4,
		description: "",
	},
	{
		name: "Ice Cream Hermit Crab",
		rarity: 4,
		description: "",
	},
	{
		name: "Alley Cat",
		rarity: 4,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Black Kite",
		rarity: 4,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Seagull",
		rarity: 4,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Peppermint Penguin",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Gingerbread Hare",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Snow Monkey",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Kookaburra",
		rarity: 4,
		description: "",
	},
	{
		name: "Jellyfish",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Gingerbread Mouse",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Deathstalker Scorpion",
		rarity: 4,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Roadrunner",
		rarity: 4,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Vulture",
		rarity: 4,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Fanghorn Tortoise",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Rice Cake Rabbit",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Burning Bunny",
		rarity: 4,
		description: "",
	},
	{
		name: "Flaming Fox",
		rarity: 4,
		description: "",
	},
	{
		name: "Wildfire Hawk",
		rarity: 4,
		description: "",
	},
	{
		name: "Ornate Horned Frog",
		rarity: 4,
		description: "",
	},
	{
		name: "Gold Mahi Mahi",
		rarity: 4,
		description: "",
	},
	{
		name: "Nautilus",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Hamster",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Candy Cane Snail",
		rarity: 4,
		description: "",
	},
	{
		name: "Inmate Capuchin Monkey (Pet)",
		rarity: 4,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Preppy Capuchin Monkey (Pet)",
		rarity: 4,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Elasmosaurus",
		rarity: 4,
		description:
			"This pet can only be obtained from the Fossil Isle Excavation (2024).",
	},
	{
		name: "Praying Mantis",
		rarity: 4,
		description: "This pet can only be obtained from a Garden Egg.",
	},
	{
		name: "Skunk",
		rarity: 4,
		description: "This pet can only be obtained from a Garden Egg.",
	},
	{
		name: "Mini Pig",
		rarity: 4,
		description:
			"This pet can only be obtained from the Summer State Fair (2024). This item can only be obtained using Robux.",
	},
	{
		name: "Pink Betta Fish",
		rarity: 4,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Pretty Pony",
		rarity: 4,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Bald Eagle",
		rarity: 4,
		description:
			"This pet can only be obtained from the Summer State Fair (2024). This item can only be obtained using Robux.",
	},
	{
		name: "Peregrine Falcon",
		rarity: 4,
		description: "",
	},
	{
		name: "Hummingbird",
		rarity: 4,
		description: "",
	},
	{
		name: "Lionfish",
		rarity: 4,
		description: "",
	},
	{
		name: "Honey Badger",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Indian Flying Fox",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Pumpkin Friend",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Ghost Chick",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Headless Horse",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Golden Jaguar",
		rarity: 4,
		description: "",
	},
	{
		name: "Grave Owl",
		rarity: 4,
		description: "",
	},
	{
		name: "Bauble Buddies",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Cold Cube",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Partridge",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Merry Mistletroll",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Winter Doe",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Mr. Whiskerpips",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Frostbite Cub",
		rarity: 4,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Puptune",
		rarity: 4,
		description:
			"This pet can only be obtained from a Moon Egg or Royal Moon Egg.",
	},
	{
		name: "Starmite",
		rarity: 4,
		description:
			"This pet can only be obtained from a Moon Egg or Royal Moon Egg.",
	},
	{
		name: "Gaelic Fae",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Frozen Penguin",
		rarity: 4,
		description: "",
	},
	{
		name: "Icy Porcupine",
		rarity: 4,
		description: "",
	},
	{
		name: "Snowy Mammoth",
		rarity: 4,
		description: "",
	},
	{
		name: "Tri-horned Treehopper",
		rarity: 4,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Kage Crow",
		rarity: 4,
		description: "",
	},
	{
		name: "Dragon",
		rarity: 5,
		description: "",
	},
	{
		name: "Giraffe",
		rarity: 5,
		description: "This pet can only be obtained from a Safari Egg.",
	},
	{
		name: "Griffin",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Unicorn",
		rarity: 5,
		description: "",
	},
	{
		name: "Golden Penguin",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Parrot",
		rarity: 5,
		description: "This pet can only be obtained from a Jungle Egg.",
	},
	{
		name: "Shadow Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event. This item can only be obtained using Robux.",
	},
	{
		name: "Bat Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "King Bee",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Queen Bee",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Owl",
		rarity: 5,
		description: "This pet can only be obtained from a Farm Egg.",
	},
	{
		name: "Crow",
		rarity: 5,
		description: "This pet can only be obtained from a Farm Egg.",
	},
	{
		name: "Frost Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Arctic Reindeer",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Turtle",
		rarity: 5,
		description: "This pet can only be obtained from an Aussie Egg.",
	},
	{
		name: "Kangaroo",
		rarity: 5,
		description: "This pet can only be obtained from an Aussie Egg.",
	},
	{
		name: "Golden Unicorn",
		rarity: 5,
		description: "This pet can only be obtained from a Golden Egg.",
	},
	{
		name: "Golden Griffin",
		rarity: 5,
		description: "This pet can only be obtained from a Golden Egg.",
	},
	{
		name: "Golden Dragon",
		rarity: 5,
		description: "This pet can only be obtained from a Golden Egg.",
	},
	{
		name: "Diamond Unicorn",
		rarity: 5,
		description: "This pet can only be obtained from a Diamond Egg.",
	},
	{
		name: "Diamond Griffin",
		rarity: 5,
		description: "This pet can only be obtained from a Diamond Egg.",
	},
	{
		name: "Diamond Dragon",
		rarity: 5,
		description: "This pet can only be obtained from a Diamond Egg.",
	},
	{
		name: "Albino Monkey",
		rarity: 5,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Monkey King",
		rarity: 5,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Ninja Monkey",
		rarity: 5,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Kitsune",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Evil Unicorn",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Golden Rat",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Dodo",
		rarity: 5,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "T-Rex",
		rarity: 5,
		description: "This pet can only be obtained from a Fossil Egg.",
	},
	{
		name: "Skele-Rex",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Cerberus",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Robo Dog",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Snow Owl",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Frost Fury",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Guardian Lion",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Metal Ox",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Golden Ladybug",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Diamond Ladybug",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Peacock",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Octopus",
		rarity: 5,
		description: "This pet can only be obtained from an Ocean Egg.",
	},
	{
		name: "Shark",
		rarity: 5,
		description: "This pet can only be obtained from an Ocean Egg.",
	},
	{
		name: "Cobra",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Goldhorn",
		rarity: 5,
		description: "This pet can only be obtained from a Mythic Egg.",
	},
	{
		name: "Phoenix",
		rarity: 5,
		description: "This pet can only be obtained from a Mythic Egg.",
	},
	{
		name: "Axolotl",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Halloween Golden Mummy Cat",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Halloween White Ghost Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event. This item can only be obtained using Robux.",
	},
	{
		name: "Golden Walrus",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Ice Golem",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Giant Gold Scarab",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Lunar Gold Tiger",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Dancing Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This item can only be obtained using Robux.",
	},
	{
		name: "Sugar Glider",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Lavender Dragon",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Fallow Deer",
		rarity: 5,
		description: "This pet can only be obtained from a Woodland Egg.",
	},
	{
		name: "Hawk",
		rarity: 5,
		description: "This pet can only be obtained from a Woodland Egg.",
	},
	{
		name: "Mechapup",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Golden Albatross",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Diamond Albatross",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Winged Horse",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Zodiac Minion Chick",
		rarity: 5,
		description: "This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Capricorn",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Diamond King Penguin",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Golden King Penguin",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Alicorn",
		rarity: 5,
		description: "",
	},
	{
		name: "Ancient Dragon",
		rarity: 5,
		description: "",
	},
	{
		name: "Dragonfly",
		rarity: 5,
		description: "",
	},
	{
		name: "Black Chow-Chow",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Chocolate Chow-Chow",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Golden Chow-Chow",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Green Butterfly",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Diamond Butterfly",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Black-Chested Pheasant",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Green-Chested Pheasant",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Baku",
		rarity: 5,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Maneki-Neko",
		rarity: 5,
		description: "This pet can only be obtained from a Japan Egg.",
	},
	{
		name: "Chimera",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Lava Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event. This item can only be obtained using Robux.",
	},
	{
		name: "Lava Wolf",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Jousting Horse",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Undead Jousting Horse",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event. This item can only be obtained using Robux.",
	},
	{
		name: "Ice Moth Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Strawberry Shortcake Bat Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Shetland Pony Light Brown",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Nessie",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Lunar Moon Bear",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Winged Tiger",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This item can only be obtained using Robux.",
	},
	{
		name: "White Amazon",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Diamond Amazon",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Firefly",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Frost Unicorn",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Albino Gorilla",
		rarity: 5,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Astronaut Gorilla",
		rarity: 5,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Emperor Gorilla",
		rarity: 5,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Field Mouse",
		rarity: 5,
		description: "",
	},
	{
		name: "Naga Dragon",
		rarity: 5,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Tree Kangaroo",
		rarity: 5,
		description: "This pet can only be obtained from a Southeast Asia Egg.",
	},
	{
		name: "Yule Log Dog",
		rarity: 5,
		description: "This pet can only be obtained from a Fool Egg.",
	},
	{
		name: "Tió De Nadal",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Cuddly Candle",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Caelum Cervi",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Owlbear",
		rarity: 5,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Spinosaurus",
		rarity: 5,
		description: "This pet can only be obtained from a Danger Egg.",
	},
	{
		name: "Shark Puppy",
		rarity: 5,
		description: "",
	},
	{
		name: "Hot Doggo",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Leviathan",
		rarity: 5,
		description: "",
	},
	{
		name: "Pirate Hermit Crab",
		rarity: 5,
		description: "",
	},
	{
		name: "Billy Goat",
		rarity: 5,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Gargoyle",
		rarity: 5,
		description: "This pet can only be obtained from an Urban Egg.",
	},
	{
		name: "Chocolate Chip Bat Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Fleur De Ice",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Candy Hare",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Glacier Kitsune",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Cactus Friend",
		rarity: 5,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Criosphinx",
		rarity: 5,
		description:
			"This pet can only be obtained from a Desert Egg or Royal Desert Egg.",
	},
	{
		name: "Rainbow Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Midnight Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This item can only be obtained using Robux.",
	},
	{
		name: "Volcanic Rhino",
		rarity: 5,
		description: "",
	},
	{
		name: "Diamond Mahi Mahi",
		rarity: 5,
		description: "",
	},
	{
		name: "Golden Hamster",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Diamond Hamster",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Candyfloss Chick",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Princess Capuchin Monkey (Pet)",
		rarity: 5,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Pirate Ghost Capuchin Monkey (Pet)",
		rarity: 5,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Royal Capuchin Monkey",
		rarity: 5,
		description:
			"This pet can only be obtained from a Monkey, Gorilla, or Capuchin Box.",
	},
	{
		name: "Dimorphodon",
		rarity: 5,
		description:
			"This pet can only be obtained from the Fossil Isle Excavation (2024).",
	},
	{
		name: "Golden Tortoise Beetle",
		rarity: 5,
		description: "This pet can only be obtained from a Garden Egg.",
	},
	{
		name: "Rosy Maple Moth",
		rarity: 5,
		description: "This pet can only be obtained from a Garden Egg.",
	},
	{
		name: "Mushroom Friend",
		rarity: 5,
		description: "This pet can only be obtained from a Garden Egg.",
	},
	{
		name: "Blue Betta Fish",
		rarity: 5,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Majestic Pony",
		rarity: 5,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Corn Doggo",
		rarity: 5,
		description:
			"This pet can only be obtained from the Summer State Fair (2024).",
	},
	{
		name: "Balloon Unicorn",
		rarity: 5,
		description:
			"This pet can only be obtained from the Summer State Fair (2024). This item can only be obtained using Robux.",
	},
	{
		name: "Cheetah",
		rarity: 5,
		description: "",
	},
	{
		name: "Bush Elephant",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Glormy Hound",
		rarity: 5,
		description: "",
	},
	{
		name: "Glormy Leo",
		rarity: 5,
		description: "",
	},
	{
		name: "Golden Hummingbird",
		rarity: 5,
		description: "",
	},
	{
		name: "Diamond Hummingbird",
		rarity: 5,
		description: "",
	},
	{
		name: "Kraken",
		rarity: 5,
		description: "",
	},
	{
		name: "Grim Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event. This item can only be obtained using Robux.",
	},
	{
		name: "Scarebear",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Dracula Parrot",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event.",
	},
	{
		name: "Evil Chick",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event. This pet can only be obtained from a limited special egg.",
	},
	{
		name: "Jekyll Hydra",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019, 2020, 2021, 2022, 2023, or 2024 Halloween Event. This item can only be obtained using Robux.",
	},
	{
		name: "Sugar Axolotl",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Hippogriff",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Fairy Bat Dragon",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Berry Cool Cube",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Naughty Mistletroll",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Royal Mistletroll",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Frostclaw",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Winter Buck",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival.",
	},
	{
		name: "Aurora Fox",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2019 Christmas Event, 2020 Winter Holiday Event, 2021 Winter Holiday Event, 2022 Winter Event, 2023 Winter Festival, or 2024 Winter Festival. This item can only be obtained using Robux.",
	},
	{
		name: "Gilded Snake",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events.",
	},
	{
		name: "Haetae",
		rarity: 5,
		description:
			"This pet can only be obtained from the 2020, 2021, 2022, 2023, 2024, or 2025 Lunar New Year events. This item can only be obtained using Robux.",
	},
	{
		name: "Dimension Drifter",
		rarity: 5,
		description:
			"This pet can only be obtained from a Moon Egg or Royal Moon Egg.",
	},
	{
		name: "Sunglider",
		rarity: 5,
		description:
			"This pet can only be obtained from a Moon Egg or Royal Moon Egg.",
	},
	{
		name: "Cupid Dragon",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Frostbite Bear",
		rarity: 5,
		description: "",
	},
	{
		name: "Sakura Spirit",
		rarity: 5,
		description: "This item can only be obtained using Robux.",
	},
	{
		name: "Scoob",
		rarity: 7,
		description: "",
	},
	{
		name: "Pumpkin (Pet)",
		rarity: 7,
		description: "",
	},
	{
		name: "2D Kitty",
		rarity: 7,
		description: "",
	},
];

