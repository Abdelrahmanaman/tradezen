import { type } from "arktype";

const ALLOWED_MIME_TYPES = [
	"image/jpeg",
	"image/png",
	"image/webp",
	"image/gif",
	"image/svg+xml",
];

export const imageFile = type({
	file: type("File").narrow((data, ctx) => {
		if (data.size === 0) {
			ctx.reject({
				message: "File cannot be empty",
			});
		}

		if (data.size > 5 * 1024 * 1024) {
			ctx.reject({
				message: "File size must be less than 5MB",
			});
		}

		if (!data.type || !ALLOWED_MIME_TYPES.includes(data.type)) {
			ctx.reject({
				message: "Invalid file type, please provide a valid image file",
			});
		}
		return true;
	}),
});

export type ImageFileType = typeof imageFile.infer;
