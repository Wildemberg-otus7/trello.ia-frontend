export type FormState =
  | { error: string; success?: undefined }
  | { success: boolean; error?: undefined };

export const defaultFormState: FormState = {
  success: false,
};
