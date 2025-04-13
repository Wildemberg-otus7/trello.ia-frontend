import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies(); // não precisa de await
  const token = (await cookieStore).get('auth_token')?.value;

  if (token) {
    // Já está logado, redireciona para o dashboard
    redirect('/dashboard');
  }

  return <>{children}</>;
}
