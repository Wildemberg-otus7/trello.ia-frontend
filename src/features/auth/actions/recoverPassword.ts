import { RecoverPasswordFormData } from '../validation/recoverPassword.schema';
import { FormState } from '@/types/formStates';

export async function recoverPasswordAction(
  _prevState: FormState,
  formData: RecoverPasswordFormData,
): Promise<FormState> {
  try {
    console.log('[Simulando envio de e-mail para recuperação]', formData.email);

    return { success: true };
  } catch {
    return { error: 'Não foi possível enviar o e-mail de recuperação. Tente novamente.' };
  }
}
