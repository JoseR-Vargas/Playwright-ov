import { test } from '@playwright/test';
import { PersonalDeatils } from '../page-object/update-user.object';
import { Authenticate } from '../helpers/log-in';

test.describe('test case TC-02  Edemsa', () => {
    test('Update user', async ({ page }) => {

        const auth = new Authenticate(page)
        await auth.LogIn('email@gmail.com', 'pass')

        const updateUser = new PersonalDeatils(page)
        await updateUser.updateUser('Anisleidys', 'Pereira','67549872','Prueba Automatizada','351678923')

    });

})