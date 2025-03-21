import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import TextField from "./text-field";
import SubmitButton from "./submit-button";
import PasswordField from "./password-field";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
	createFormHookContexts();

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		PasswordField,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
});
