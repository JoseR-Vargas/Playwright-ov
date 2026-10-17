import { expect, Page } from "@playwright/test";

export class Authenticate {
    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    async LogIn(email: string, password: string) {
        await this.page.goto('https://virtual-office-frontend-qa.edemsa.pormel.tech/iniciar-sesion');

        await this.page.locator('[placeholder="Ingresa tu correo"]').fill(email)
        await this.page.locator('[placeholder="Ingresa tu contraseña"]').fill(password)
        const loginLabel = this.page.getByRole('button', { name: 'Ingresar' }).getByText('Ingresar', { exact: true });
        await loginLabel.click()
        await expect(this.page.getByRole('alert')).toContainText('Se ha iniciado sesión correctamente.');
    }
}