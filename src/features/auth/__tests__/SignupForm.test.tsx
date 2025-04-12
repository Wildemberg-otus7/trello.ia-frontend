import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { SignupForm } from "../SignUp"

// Mock da server action (você pode mockar o signupFormAction se for necessário em outros testes)
jest.mock("../actions/signUp", () => ({
  signupAction: jest.fn((_prev, data) => {
    if (data.email === "existente@exemplo.com") {
      return Promise.resolve({ error: "Este e-mail já está cadastrado" })
    }
    return Promise.resolve({ success: true })
  }),
  signupSchema: jest.requireActual("../actions/signUp").signupSchema,
}))

describe("SignupForm", () => {
  it("deve renderizar os campos do formulário", () => {
    render(<SignupForm />)

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^senha$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirmar senha/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /criar conta/i })).toBeInTheDocument()
  })

  it("deve mostrar erros ao enviar com campos vazios", async () => {
    render(<SignupForm />)

    fireEvent.click(screen.getByRole("button", { name: /criar conta/i }))

    expect(await screen.findByText(/nome é obrigatório/i)).toBeInTheDocument()
    expect(await screen.findByText(/e-mail é obrigatório/i)).toBeInTheDocument()
    expect(await screen.findByText(/senha é obrigatória/i)).toBeInTheDocument()
    expect(await screen.findByText(/confirmação de senha é obrigatória/i)).toBeInTheDocument()
  })

  it("deve mostrar erro se as senhas forem diferentes", async () => {
    render(<SignupForm />)

    fireEvent.input(screen.getByLabelText(/nome/i), { target: { value: "Will" } })
    fireEvent.input(screen.getByLabelText(/e-mail/i), { target: { value: "will@email.com" } })
    fireEvent.input(screen.getByLabelText(/^senha$/i), { target: { value: "123456" } })
    fireEvent.input(screen.getByLabelText(/confirmar senha/i), { target: { value: "654321" } })

    fireEvent.click(screen.getByRole("button", { name: /criar conta/i }))

    expect(await screen.findByText(/as senhas não conferem/i)).toBeInTheDocument()
  })

  it("deve exibir mensagem de sucesso após cadastro válido", async () => {
    render(<SignupForm />)

    fireEvent.input(screen.getByLabelText(/nome/i), { target: { value: "Will" } })
    fireEvent.input(screen.getByLabelText(/e-mail/i), { target: { value: "will@ok.com" } })
    fireEvent.input(screen.getByLabelText(/^senha$/i), { target: { value: "123456" } })
    fireEvent.input(screen.getByLabelText(/confirmar senha/i), { target: { value: "123456" } })

    fireEvent.click(screen.getByRole("button", { name: /criar conta/i }))

    expect(await screen.findByText(/cadastro realizado com sucesso/i)).toBeInTheDocument()
  })

  it("deve exibir erro se o e-mail já estiver cadastrado", async () => {
    render(<SignupForm />)

    fireEvent.input(screen.getByLabelText(/nome/i), { target: { value: "Will" } })
    fireEvent.input(screen.getByLabelText(/e-mail/i), { target: { value: "existente@exemplo.com" } })
    fireEvent.input(screen.getByLabelText(/^senha$/i), { target: { value: "123456" } })
    fireEvent.input(screen.getByLabelText(/confirmar senha/i), { target: { value: "123456" } })

    fireEvent.click(screen.getByRole("button", { name: /criar conta/i }))

    expect(await screen.findByText(/já está cadastrado/i)).toBeInTheDocument()
  })
})
