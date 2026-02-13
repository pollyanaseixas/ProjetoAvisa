import { test, expect } from '@playwright/test';

test.describe('Backoffice - SISAMB - Cadastro de Plano', () => {

  test.beforeEach(async ({ page }) => {
    // Realiza o login antes de cada teste do describe
    await page.goto('https://bahia-test.pglsmais.com.br/sisamb/backoffice/');
    await page.fill('input[name="username"]', 'adminBranef@branef.com.br');
    await page.fill('input[name="password"]', 'Branef123@#');
    await page.getByRole('button', { name: 'Entrar' }).click();
    await expect(
      page.getByRole('heading', { name: 'Planos de Ação' })
    ).toBeVisible({ timeout: 15000 });
  });

  test('Deve cadastrar um novo plano com sucesso', async ({ page }) => {
    // Navegar para a página de cadastro de planos
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    // Preencher o formulário de cadastro
    // Os seletores e valores abaixo são exemplos e precisam ser ajustados
    await page.selectOption('#select-field', { label: 'ADUSTINA' });
    
    // Clicar no botão para salvar/cadastrar
    await page.getByRole('button', { name: 'Salvar' }).click();

    // Validar se o plano foi cadastrado com sucesso
    // A validação abaixo é um exemplo e precisa ser ajustada
    await expect(
      page.getByText('Plano cadastrado com sucesso!')
    ).toBeVisible();
  });

});
