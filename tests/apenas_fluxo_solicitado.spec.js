import { test, expect } from '@playwright/test';
import { dados as D } from '../pages/dados';

import Login from '../pages/login';
import inventory from '../pages/inventory';
import cart from '../pages/cart';
import checkout_step_one from '../pages/checkout_step_one';
import checkout_step_two  from '../pages/checkout_step_two';

test ('Fluxo auvo',async({page})=>{
    ///Arrange
    await Login.Acessar_pagina(page);
    ///Act
    await Login.Realizar_login(page,D.usuario_valido,D.senha);  
    await inventory.Verificar_item(page, D.bike_light_ID_0);
    await inventory.Adicionar_item(page, D.bike_light_ID_0);
    await cart.Abrir_cart(page);
    await cart.Acessar_Checkout(page);
    await checkout_step_one.Preencher_dados(page,D.username_0,D.lastname_0,D.cep_0);
    await checkout_step_one.Continuar_para_checkout(page);
    

    ///Assert
    await checkout_step_two.Finalizar_compra(page);


});