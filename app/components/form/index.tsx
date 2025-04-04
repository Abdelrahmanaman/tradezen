import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import TextField from "./text-field";
import SubmitButton from "./submit-button";
import PasswordField from "./password-field";
import CustomCheckbox from "../ui/customCheckbox";
import SelectSearch from "../adopt-me/select-search";
import CustomSelect from "../adopt-me/custom-select";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
	createFormHookContexts();

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		PasswordField,
		CustomCheckbox,
		CustomSelect,
		SelectSearch,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
});
