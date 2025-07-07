import {test,expect} from '@playwright/test';
import { dados as D } from '../pages/dados';
import Login from '../pages/login';
import checkout_step_two  from '../pages/checkout_step_two';
import inventory from '../pages/inventory';
import cart from '../pages/cart';
import checkout_step_one from '../pages/checkout_step_one';


test.beforeEach(async({page}) =>{
    ///Arrange
    await Login.Acessar_pagina(page);
    await Login.Realizar_login(page, D.usuario_valido, D.senha);
    await inventory.Adicionar_item(page,D.onisie_ID_2);
    await cart.Abrir_cart(page);
    await cart.Acessar_Checkout(page);
    await checkout_step_one.Preencher_dados(page, D.username_1, D.lastname_1, D.cep_1);
    await checkout_step_one.Continuar_para_checkout(page);
    
});

test('verificar detalhes do item',async ({page})=>{
    ///Assert
    await checkout_step_two.Verificar_detalhes(page, D.item_2_name, D.item_2_desc, D.item_2_price);
});

test('Finalizar compra',async ({page})=>{
    ///Act
    await checkout_step_two.Finalizar_compra(page);

    ///Assert
    await checkout_step_two.Verificar_conclusao(page);

});
