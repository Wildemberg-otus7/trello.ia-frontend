import * as yup from 'yup';

export const signupSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas não conferem')
    .required('Confirmação de senha é obrigatória'),
});

export type SignupFormData = yup.InferType<typeof signupSchema>;
