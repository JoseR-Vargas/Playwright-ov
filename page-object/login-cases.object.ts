import { expect, Page } from "@playwright/test";

export class LoginCasesError {

    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    async rejectEmailWithoutAtSymbol(email: string) {
        const emailInput = this.page.getByPlaceholder('Ingresa tu correo')
        await emailInput.fill(email);

        await expect(emailInput).toHaveAttribute('aria-invalid', 'true');
        await expect(emailInput).toHaveAccessibleDescription('Ingrese un correo válido por favor');
    }

    async rejectEmailWithoutDomain(email: string) {
        const emailInput = this.page.getByPlaceholder('Ingresa tu correo');
        await emailInput.fill(email);

        await expect(emailInput).toHaveAttribute('aria-invalid', 'true');
        await expect(emailInput).toHaveAccessibleDescription('Ingrese un correo válido por favor');
    }

    async rejectEmailWithInvalidDomain(email: string) {
        const emailInput = this.page.getByPlaceholder('Ingresa tu correo');
        await emailInput.fill(email);

        await expect(emailInput).toHaveAttribute('aria-invalid', 'true');
        await expect(emailInput).toHaveAccessibleDescription('Ingrese un correo válido por favor');
    }

    async rejectDomainWithConseccutiveDots(email: string) {
        const emailInput = this.page.getByPlaceholder('Ingresa tu correo');
        await emailInput.fill(email);

        await expect(emailInput).toHaveAttribute('aria-invalid', 'true');
        await expect(emailInput).toHaveAccessibleDescription('Ingrese un correo válido por favor');
    }
}