import { imageFile } from "./../lib/validation/uploadthing";
import { UTApi } from "uploadthing/server";
import { createServerFn } from "@tanstack/react-start";
import { tryCatch } from "@/lib/try-catch";

export const uploadImage = createServerFn({ method: "POST" })
	.validator((data: unknown) => {
		if (!(data instanceof FormData)) {
			throw new Error("Invalid form data");
		}

		const file = data.get("file");

		const { file: assertedFile } = imageFile.assert({ file });

		return { file: assertedFile };
	})
	.handler(async ({ data: { file } }) => {
		console.log("file is ", file);
		const utapi = new UTApi();
		const { data, error } = await tryCatch(utapi.uploadFiles([file]));

		if (error) {
			throw new Error(error.message);
		}

		console.log("data is ", data);
		return { url: data };
	});
