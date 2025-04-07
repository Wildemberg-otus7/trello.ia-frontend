// Caminho: src/features/auth/actions/login.ts

'use server';

export type LoginState =
  | { error: string; success?: undefined }
  | { success: boolean; error?: undefined };

export const loginAction = async (
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  await new Promise((res) => setTimeout(res, 500));

  if (email === 'teste@exemplo.com' && password !== 'senha123') {
    return { error: 'Credenciais inválidas' };
  }

  if (email && password) {
    return { success: true };
  }

  return { error: 'Erro ao fazer login' };
};
