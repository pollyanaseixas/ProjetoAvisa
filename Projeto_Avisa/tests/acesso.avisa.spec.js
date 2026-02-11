

import { test, expect } from '@playwright/test';
test.use({
  viewport: { width: 1600, height: 1200 },
});

test.describe('Backoffice - SISAMB', () => {

  test('Deve acessar a tela inicial do Backoffice', async ({ page }) => {
    await page.goto('https://bahia-test.pglsmais.com.br/sisamb/backoffice/');
    // Validação simples para garantir que a página carregou
   
  });

});
test('Deve realizar login com sucesso', async ({ page }) => {
  
  await page.goto('https://bahia-test.pglsmais.com.br/sisamb/backoffice/');
  await page.fill('input[name="username"]', 'adminBranef@branef.com.br');
  await page.fill('input[name="password"]', 'Branef123@#');
  await page.locator('#password').screenshot({ path: 'screenshot/camposenha.png' });
  await page.getByRole('button', { name: 'Entrar' }).click();
  await expect(
    page.getByRole('heading', { name: 'Planos de Ação' })
  ).toBeVisible({ timeout: 15000 });
   await page.screenshot({ path: 'screenshot/telacheia.png' });
});

  
