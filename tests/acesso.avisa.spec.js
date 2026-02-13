
import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 1600, height: 1200 },
});

test.describe('Backoffice - SISAMB', () => {

  // Executa antes de cada teste
  test.beforeEach(async ({ page }) => {
    await page.goto('https://bahia-test.pglsmais.com.br/sisamb/backoffice/');
  });

  test('Deve acessar a tela inicial do Backoffice', async ({ page }) => {
    // Validação simples para garantir que a página carregou
    await expect(page).toHaveURL(/backoffice/);
  });

  test('Deve realizar login com sucesso', async ({ page }) => {
    await page.fill('input[name="username"]', process.env.USER_NAME || 'adminBranef@branef.com.br');
    await page.fill('input[name="password"]', process.env.PASSWORD || 'Branef123@#');

    await page.locator('#password').screenshot({ path: 'screenshot/camposenha.png' });

    await page.getByRole('button', { name: 'Entrar' }).click();

    await expect(
      page.getByRole('heading', { name: 'Planos de Ação' })
    ).toBeVisible({ timeout: 15000 });

    await page.screenshot({ path: 'screenshot/telacheia.png' });
  });

});

  
