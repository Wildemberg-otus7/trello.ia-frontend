'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { startTransition, useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

import { defaultFormState } from '@/constants/formStates';
import { FormState } from '@/types/formStates';
import { recoverPasswordAction } from './actions/recoverPassword';
import { RecoverPasswordFormData, recoverPasswordSchema } from './validation/recoverPassword.schema';

export function RecoverPasswordForm() {
  const [state, recoverAction, isPending] = useActionState<FormState, RecoverPasswordFormData>(
    recoverPasswordAction,
    defaultFormState
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPasswordFormData>({
    resolver: yupResolver(recoverPasswordSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: RecoverPasswordFormData) => {
    startTransition(() => {
      recoverAction(data);
    });
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Recuperar senha</h1>
        <p className="text-muted-foreground">Informe seu e-mail para receber instruções</p>
      </div>

      {state.error && (
        <Alert variant="destructive">
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.success && (
        <Alert className="bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Se o e-mail estiver cadastrado, você receberá as instruções em breve.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Enviando...' : 'Enviar instruções'}
        </Button>

        <div className="text-center text-sm">
          Lembrou sua senha?{' '}
          <Link href="/login" className="text-sky-600 hover:underline">
            Voltar ao login
          </Link>
        </div>
      </form>
    </div>
  );
}
