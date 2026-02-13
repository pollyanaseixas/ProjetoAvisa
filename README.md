# 🚀 Projeto Avisa - Automação com Playwright

Projeto de automação de testes end-to-end utilizando Playwright com integração contínua via GitHub Actions.

---

## 📌 Objetivo

Automatizar fluxos do sistema Backoffice - SISAMB, validando:

- ✅ Acesso à tela inicial
- ✅ Login no sistema
- ✅ Cadastro de plano
- ⏳ Novos fluxos em desenvolvimento

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Playwright
- GitHub Actions (CI/CD)

---

## 📂 Estrutura do Projeto
├── tests/
│ ├── acesso.avisa.spec.js
│ ├── cadastro-plano.avisa.spec.js
├── playwright.config.js
├── .github/workflows/playwright.yml


---

## ▶️ Como Executar Localmente

1. Clonar o repositório:

```bash
git clone https://github.com/pollyanaseixas/ProjetoAvisa.git
npm install
Executar testes:
npx playwright install
Visualizar relatório:
npx playwright show-report
Integração Contínua

Este projeto possui pipeline configurado no GitHub Actions.

O workflow executa automaticamente:

Em qualquer push

Em Pull Requests

Manualmente via workflow_dispatch

Os artefatos gerados incluem:

Relatório HTML do Playwright

Trace de execução para debug

🔄 Fluxo de Versionamento

Fluxo baseado em branches:

main → branch (feature/fix/test) → Pull Request → CI valida → Merge

📈 Evoluções Futuras

Separação de ambientes (dev/homolog)

Testes com dados parametrizados

Execução paralela otimizada

Integração com relatórios avançados

👨‍💻 Autor

Projeto desenvolvido para fins de estudo e aprimoramento em automação de testes e CI/CD.


---

# 🎯 Próximo Passo

1. Crie o arquivo:

```bash
touch README.md


Cole o conteúdo

Commit:

git add README.md
git commit -m "Adiciona README profissional"
git push origin main


