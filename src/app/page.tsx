import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 to-white">
      {/* Cabeçalho */}
      <header className="w-full py-4 px-6 border-b border-slate-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-sky-600">Trello.ia</h1>
          </div>
          <nav>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full text-center space-y-12">
          {/* Seção hero */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Organize suas tarefas com inteligência
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Simplifique seu fluxo de trabalho, aumente sua produtividade e gerencie projetos com
              facilidade usando nossa plataforma intuitiva.
            </p>
            <div className="pt-4">
              <Link href="/login">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base rounded-lg bg-sky-600 hover:bg-sky-700"
                >
                  Começar agora
                </Button>
              </Link>
            </div>
          </div>

          {/* Ilustração */}
          <div className="relative h-64 md:h-80 w-full max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              {/* Cartões simulando um quadro Trello */}
              <div className="bg-white rounded-lg shadow-md p-4 w-48 h-64 flex flex-col">
                <div className="text-sm font-medium text-slate-700 mb-3">A fazer</div>
                <div className="bg-slate-100 rounded p-2 mb-2">
                  <div className="text-xs text-slate-800">Planejar sprint</div>
                </div>
                <div className="bg-slate-100 rounded p-2 mb-2">
                  <div className="text-xs text-slate-800">Revisar documentação</div>
                </div>
                <div className="bg-slate-100 rounded p-2">
                  <div className="text-xs text-slate-800">Preparar apresentação</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 w-48 h-64 flex flex-col">
                <div className="text-sm font-medium text-slate-700 mb-3">Em progresso</div>
                <div className="bg-sky-100 rounded p-2 mb-2">
                  <div className="text-xs text-slate-800">Desenvolver API</div>
                </div>
                <div className="bg-sky-100 rounded p-2">
                  <div className="text-xs text-slate-800">Criar componentes UI</div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 w-48 h-64 flex flex-col">
                <div className="text-sm font-medium text-slate-700 mb-3">Concluído</div>
                <div className="bg-green-100 rounded p-2 mb-2">
                  <div className="text-xs text-slate-800">Definir requisitos</div>
                </div>
                <div className="bg-green-100 rounded p-2">
                  <div className="text-xs text-slate-800">Configurar ambiente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="w-full py-6 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Trello.ia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
