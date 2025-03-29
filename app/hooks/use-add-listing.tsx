import { addListSchema, type AddListType } from "@/lib/validation/add-list";
import { createServerFn } from "@tanstack/react-start";
import { db } from "../../db/db";
import { listings } from "../../db/schema";

const addListing = createServerFn({ method: "POST" })
	.validator((data: unknown): AddListType => {
		const assertedData = addListSchema.assert(data);
		return assertedData;
	})
	.handler(async ({ data }) => {
		console.log(data);
	});
