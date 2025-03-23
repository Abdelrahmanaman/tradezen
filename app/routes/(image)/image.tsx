import { uploadImage } from "@/services/uploadthing";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(image)/image")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<form
				encType="multipart/form-data"
				onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
					event.preventDefault();
					const formData = new FormData(event.currentTarget);
					const response = await uploadImage({ data: formData });

					console.log(response);
				}}
			>
				<input type="file" name="file" />
				<button type="submit">Upload</button>
			</form>
		</div>
	);
}
