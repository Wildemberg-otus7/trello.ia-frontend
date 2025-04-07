import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '../Login';

describe('LoginForm', () => {
  it('renderiza os campos corretamente', () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();

    // Corrigido: garantir que só ache o botão com texto exato "Entrar"
    expect(screen.getByRole('button', { name: /^entrar$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar com google/i })).toBeInTheDocument();
  });

  it('exibe mensagens de erro para campos vazios após submit', async () => {
    render(<LoginForm />);
    const submitButton = screen.getByRole('button', { name: /^entrar$/i });

    await userEvent.click(submitButton);

    expect(await screen.findByText(/e-mail é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/senha é obrigatória/i)).toBeInTheDocument();
  });

  it('valida formato de e-mail', async () => {
    render(<LoginForm />);
    const emailInput = screen.getByLabelText(/e-mail/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const submitButton = screen.getByRole('button', { name: /^entrar$/i });

    await userEvent.type(emailInput, 'emailinvalido');
    await userEvent.type(passwordInput, '123456');
    await userEvent.click(submitButton);

    expect(await screen.findByText(/digite um e-mail válido/i)).toBeInTheDocument();
  });
});
