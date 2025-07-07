import {expect} from '@playwright/test'
import { elements as el } from './elements'



class Checkou_step_one{

    async Preencher_dados(page, username, lastname, cep){
        await page.locator(el.campo_name).fill(username);
        await page.locator(el.campo_lastname).fill(lastname);
        await page.locator(el.campo_postalcode).fill(cep);        
    }

    async Verificar_dados(page, username, lastname, cep){
        await expect(page.locator(el.campo_name)).toHaveValue(username);
        await expect(page.locator(el.campo_lastname)).toHaveValue(lastname);
        await expect(page.locator(el.campo_postalcode)).toHaveValue(cep);
    }

    async Continuar_para_checkout(page){
        await page.locator(el.botao_checkout).click();
    }

    async Verificar_URL_checkout_two(page){
        await expect(page).toHaveURL(el.URL_checkout_two)
    }


}

export default new Checkou_step_one();


