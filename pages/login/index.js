import {elements as el} from './elements'
import { dados as D } from '../dados';
import  {expect} from '@playwright/test';

class Login {
    
    async Acessar_pagina(page){
        await page.goto(el.URL_saucedemo);
    }

    async Realizar_login(page,usario,senha){
        await page.locator(el.username).fill(usario);
        await page.locator(el.password).fill(senha);
        await page.locator(el.login_botton).click();
    }

    async Confirmar_redirecionamento_inventory(page){
        await expect(page).toHaveURL(el.URL_inventory)
    }

    async Confirmar_bloqueio(page){
        await expect(page.locator(el.pop_up_erro_login)).toBeVisible();
    }
}

export default new Login();