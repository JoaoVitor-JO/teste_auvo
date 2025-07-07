import {elements as el} from './elements';
import {test, expect} from '@playwright/test';

class Inventory_item {

    async Selecionar_item(page,selec){
        const dicionario = {
            0: async () => await page.locator(el.link_titulo_item_0).click(),
            1: async () => await page.locator(el.link_titulo_item_1).click(),
            2: async () => await page.locator(el.link_titulo_item_2).click(),
            3: async () => await page.locator(el.link_titulo_item_3).click(),
            4: async () => await page.locator(el.link_titulo_item_4).click(),
            5: async () => await page.locator(el.link_titulo_item_5).click()
        };
        await dicionario[selec]();
    }

    async Verificar_descricoes(page, titulo, desc, preco, URL){
        await expect(page.locator(el.titulo)).toContainText(titulo);
        await expect(page.locator(el.descricao)).toContainText(desc);
        await expect(page.locator(el.preco)).toContainText(preco); 
        await expect(page).toHaveURL(URL)
    }

    async Adicionar_item(page){
        await page.locator(el.botao_add).click();
    }
    
    async Remover_item(page){
        await page.locator(el.botao_remove).click();
    }

    async Verificar_adicao(page){
        await expect(page.locator(el.botao_remove)).toBeVisible();
    }

    async Verificar_remocao(page){
        await expect(page.locator(el.botao_add)).toBeVisible();
    }
    
    async Retornar_inventory(page){
        await page.locator(el.retornar_inventory_link).click();
    }

    async Abrir_cart(page){
        await page.locator(el.cart_link).click();
    }

}
export default new Inventory_item();