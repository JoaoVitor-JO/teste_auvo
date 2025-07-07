import {test,expect} from '@playwright/test'
import {elements as el} from './elements'

class Checkout_step_two {

    async Verificar_detalhes(page, titulo, desc, preco ){
        await expect(page.locator(el.item_name)).toContainText(titulo);
        await expect(page.locator(el.item_desc)).toContainText(desc);
        await expect(page.locator(el.item_price)).toContainText(preco);
    }

    async Finalizar_compra(page){
        await page.locator(el.botao_finish).click();
    }

    async Verificar_conclusao(page){
        await expect(page).toHaveURL(el.URL_checkout_complete);
        await expect(page.locator(el.header_agradecimento)).toContainText('Thank you for your order!');
    }
}

export default new Checkout_step_two();