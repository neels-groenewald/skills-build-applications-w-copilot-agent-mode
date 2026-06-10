// VITE_CODESPACE_NAME must be defined in .env.local when running outside Codespaces.
// Example .env.local:
//   VITE_CODESPACE_NAME=your-codespace-name
const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const API_BASE = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function apiUrl(path) {
  return `${API_BASE}/${path}`
}
