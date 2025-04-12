'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { startTransition, useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { signupAction } from './actions/signUp';
import { SignupFormData, signupSchema } from './validation/signUp.schema';
import { defaultFormState } from '@/constants/formStates';
import { FormState } from '@/types/formStates';

export function SignupForm() {
  const [state, signupFormAction, isPending] = useActionState<FormState, SignupFormData>(
    signupAction,
    defaultFormState,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: SignupFormData) => {
    startTransition(() => {
      signupFormAction(data);
    });
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Criar conta</h1>
        <p className="text-muted-foreground">Preencha os dados abaixo para se cadastrar</p>
      </div>

      {state.error && (
        <Alert variant="destructive">
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.success && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Cadastro realizado com sucesso!{' '}
            <Link href="/login" className="font-medium underline">
              Faça login
            </Link>
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            {...register('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            {...register('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            {...register('password')}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password && (
            <p id="password-error" className="text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar senha</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            aria-invalid={!!errors.confirmPassword}
            aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
          />
          {errors.confirmPassword && (
            <p id="confirm-password-error" className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Cadastrando...' : 'Criar conta'}
        </Button>

        <div className="text-center text-sm">
          Já tem uma conta?{' '}
          <Link href="/login" className="text-sky-600 hover:underline">
            Faça login
          </Link>
        </div>
      </form>
    </div>
  );
}
