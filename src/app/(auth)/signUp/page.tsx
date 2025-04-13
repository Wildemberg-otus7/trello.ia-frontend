import { SignupForm } from '@/features/auth/SignUp';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function SignupPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (token) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    if (res.ok) {
      return redirect('/dashboard');
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-white p-4">
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  );
}
