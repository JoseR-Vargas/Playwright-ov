import { Page } from "@playwright/test";

export class PersonalDeatils {
    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    async updateUser(name: string, lastName: string, dni: string, socialRazon: string, cellPhone: string) {
        const userButton = this.page.getByRole('button', { name: 'AS' })
        await userButton.click()

        const misDatos = this.page.getByRole('menuitem', { name: 'Mis datos' })
        await misDatos.click()

        const nombreUsuario = this.page.getByRole('textbox', { name: 'Nombre * ' })
        await nombreUsuario.clear()
        await nombreUsuario.fill(name)

        const apellidoUsuario = this.page.getByRole('textbox', { name: 'Apellido * ' })
        await apellidoUsuario.clear()
        await apellidoUsuario.fill(lastName)

        await this.page.getByRole('combobox', { name: 'No binario' }).click()
        const sexoMujer = this.page.locator('[data-value="Mujer"]')
        await sexoMujer.click()

        await this.page.getByRole('combobox', { name: 'DNI' }).click()
        const tipoDocumento = this.page.locator('[data-value="cuit"]')
        await tipoDocumento.click()

        const documentInput = this.page.getByLabel('Número de documento');
        await documentInput.fill(dni);

        const razonSocial = this.page.getByLabel('Razón Social')
        await razonSocial.fill(socialRazon)

        const telefono = this.page.getByLabel('Teléfono * ')
        await telefono.fill(cellPhone)
    }
}