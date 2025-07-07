import {elements as el} from '../inventory/elements';
import {dados as D} from '../dados';
import {test, expect} from '@playwright/test';

class Inventory {
   
   async Adicionar_item(page,selec){
        const dicionario = {
            0: async () => await page.locator(el.botao_add_item_0).click(),
            1: async () => await page.locator(el.botao_add_item_1).click(),
            2: async () => await page.locator(el.botao_add_item_2).click(),
            3: async () => await page.locator(el.botao_add_item_3).click(),
            4: async () => await page.locator(el.botao_add_item_4).click(),
        };
        await dicionario[selec]();
    }


   async Remover_item(page,selec){
        const dicionario = {
            0: async () => await page.locator(el.botao_remov_item_0).click(),
            1: async () => await page.locator(el.botao_remov_item_1).click(),
            2: async () => await page.locator(el.botao_remov_item_2).click(),
            3: async () => await page.locator(el.botao_remov_item_3).click(),
            4: async () => await page.locator(el.botao_remov_item_4).click(),
        };
        await dicionario[selec]();
    }
   
   async Verificar_item(page,selec){
        const dicionario = {
            0: async () => {
                await expect(page.locator(el.imagem_item_0)).toBeVisible();
                await expect(page.locator(el.titulo_item_0)).toContainText(D.item_0_name);
                await expect(page.locator(el.descricao_item_0)).toContainText(D.item_0_desc);
                await expect(page.locator(el.preco_item_0)).toContainText(D.item_0_price);
            },
            
            1: async () => {
                await expect(page.locator(el.imagem_item_1)).toBeVisible();
                await expect(page.locator(el.titulo_item_1)).toContainText(D.item_1_name);
                await expect(page.locator(el.descricao_item_1)).toContainText(D.item_1_desc);
                await expect(page.locator(el.preco_item_1)).toContainText(D.item_1_price);
            },

            2: async () => {
                await expect(page.locator(el.imagem_item_2)).toBeVisible();
                await expect(page.locator(el.titulo_item_2)).toContainText(D.item_2_name);
                await expect(page.locator(el.descricao_item_2)).toContainText(D.item_2_desc);
                await expect(page.locator(el.preco_item_2)).toContainText(D.item_2_price);
            },

            3: async () => {
                await expect(page.locator(el.imagem_item_3)).toBeVisible();
                await expect(page.locator(el.titulo_item_3)).toContainText(D.item_3_name);
                await expect(page.locator(el.descricao_item_3)).toContainText(D.item_3_desc);
                await expect(page.locator(el.preco_item_3)).toContainText(D.item_3_price);
            },
            4: async () => {
                await expect(page.locator(el.imagem_item_4)).toBeVisible();
                await expect(page.locator(el.titulo_item_4)).toContainText(D.item_4_name);
                await expect(page.locator(el.descricao_item_4)).toContainText(D.item_4_desc);
                await expect(page.locator(el.preco_item_4)).toContainText(D.item_4_price);
            },
            5: async () => {
                await expect(page.locator(el.imagem_item_5)).toBeVisible();
                await expect(page.locator(el.titulo_item_5)).toContainText(D.item_5_name);
                await expect(page.locator(el.descricao_item_5)).toContainText(D.item_5_desc);
                await expect(page.locator(el.preco_item_5)).toContainText(D.item_5_price);
            }
        };
        await dicionario[selec]();
    }

    async Verificar_adicao(page,qnt_itens){
        await expect(page.locator(el.emblema_item_add)).toContainText(qnt_itens);
    }


}

export default new Inventory();