
import { RecoverPasswordFormData } from '../validation/recoverPassword.schema';
import { FormState } from '@/types/formStates';

export async function recoverPasswordAction(
  _prevState: FormState,
  formData: RecoverPasswordFormData
): Promise<FormState> {
  try {
    console.log('[Simulando envio de e-mail para recuperação]', formData.email);

    // Aqui poderíamos chamar uma API, ex:
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/recover-password`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: formData.email }),
    // });

    return { success: true };
  } catch (error) {
    return { error: 'Não foi possível enviar o e-mail de recuperação. Tente novamente.' };
  }
}
