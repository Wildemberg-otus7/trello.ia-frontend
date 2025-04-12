import { FormState } from "@/types/formStates";
import { SignupFormData } from "../validation/signUp.schema";

export  const signupAction = async (
  signState: FormState,
  formData: SignupFormData
): Promise<FormState> => {

  const { name, email, password } = formData

  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log(signState, name, email, password);


  if (email === "existente@exemplo.com") {
    return { error: "Este e-mail já está cadastrado" }
    }
  
    return { error: "Ocorreu um erro inesperado" }
  }

//   redirect('/auth/login') // Interrompe execução aqui



