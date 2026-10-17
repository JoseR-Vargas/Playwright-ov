import { test } from '@playwright/test';
import { LoginCasesError } from '../page-object/login-cases.object';

test.beforeEach(async ({ page }) => {
    await page.goto('https://virtual-office-frontend-qa.edemsa.pormel.tech/iniciar-sesion');
})

test.describe('test case Edemsa', () => {

    test('TC-13-Reject email without symbol', async ({ page }) => {
        const rejectEmailWithoutAtSymbol = new LoginCasesError(page)
        await rejectEmailWithoutAtSymbol.rejectEmailWithoutAtSymbol('usuariodominio.com')
    })

    test('TC-14-Reject email without domain', async ({ page }) => {
        const rejectEmailWithoutDomain = new LoginCasesError(page)
        await rejectEmailWithoutDomain.rejectEmailWithoutDomain('usuario')
    })

    test('TC-15-Reject email with invalid domain', async ({ page }) => {
        const rejectEmailWithInvalidDomain = new LoginCasesError(page)
        await rejectEmailWithInvalidDomain.rejectEmailWithoutDomain('usuario@dominio')
    })

    test('TC-16-Reject email with conseccutive dots', async ({ page }) => {
        const rejectDomainWithConseccutiveDots = new LoginCasesError(page)
        await rejectDomainWithConseccutiveDots.rejectDomainWithConseccutiveDots('usuario@dominio..com')
    })
})









