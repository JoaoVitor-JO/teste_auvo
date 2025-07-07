import { elements as el } from "./elements";
import { expect } from '@playwright/test';

class Cart {

        async Abrir_cart(page){
        await page.locator(el.cart_link).click();
    }

    async Acessar_Checkout(page){
        await page.locator(el.botao_checkout).click();
    }

    async Confirmar_redirecionamento_carrinho(page){
        await expect(page).toHaveURL(el.URL_cart)
    }

    async Confirmar_redirecionamento_checkout(page){
        await expect(page).toHaveURL(el.URL_checkout);
    }

}
export default new Cart();