// src/utils/getBackendUrl.ts
export const getBackendUrl = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080' // rodando fora do container (next dev)
    : (process.env.API_INTERNAL_URL ?? 'http://trelloia-backend:3000'); // em produção ou docker
};
