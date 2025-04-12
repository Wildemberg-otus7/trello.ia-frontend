import { FormState } from "@/types/formStates";
import { LoginFormData } from "../validation/login.schema";

  export const loginAction = async (
    _prev: FormState,
    data: LoginFormData
  ): Promise<FormState> => {
    const { email, password } = data;
  
    await new Promise((res) => setTimeout(res, 500));
  
    if (email === 'teste@exemplo.com' && password !== 'senha123') {
      return { error: 'Credenciais inválidas' };
    }
  
    if (email && password) {
      return { success: true };
    }
  
    return { error: 'Erro ao fazer login' };
  };
  