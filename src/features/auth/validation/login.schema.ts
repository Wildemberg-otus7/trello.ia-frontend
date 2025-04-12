import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
