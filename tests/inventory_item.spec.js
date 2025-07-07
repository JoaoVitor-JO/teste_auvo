import Login from '../pages/login';
import { dados as D } from '../pages/dados';
import { test, expect } from '@playwright/test';
import Inventory_item from '../pages/inventory_item';
import cart from '../pages/cart';



test.beforeEach(async({page})=>{
    /// Arrange
    await Login.Acessar_pagina(page);
    await Login.Realizar_login(page,D.usuario_valido,D.senha);
});

test ('Verificar caracteristicas Bike Light (item 0)',async({page})=>{
    ///Act
    await Inventory_item.Selecionar_item(page,D.bike_light_ID_0);
    ///Assert
    await Inventory_item.Verificar_descricoes(page, D.item_0_name, D.item_0_desc, D.item_0_price,D.item_0_URL);
});

test ('Verificar botão adicionar Bike Light (item 0)',async({page})=>{
    ///Act
    await Inventory_item.Selecionar_item(page, D.bike_light_ID_0)
    await Inventory_item.Adicionar_item(page);
    ///Assert
    await Inventory_item.Verificar_adicao(page);
});

test ('Verificar botão remover Bike Light (item 0)',async({page})=>{
    ///Act
    await Inventory_item.Selecionar_item(page, D.bike_light_ID_0);
    await Inventory_item.Adicionar_item(page);
    await Inventory_item.Remover_item(page);
    ///Assert
    await Inventory_item.Verificar_remocao(page);
});

test ('Verificar botão retornar Bike Light (item 0)',async({page})=>{
    ///Act
    await Inventory_item.Selecionar_item(page,D.bike_light_ID_0);
    await Inventory_item.Retornar_inventory(page);

    ///Assert
    await Login.Confirmar_redirecionamento_inventory(page);
});

test ('Abrir carrinho Bike Light (item 0)',async({page})=>{
    ///Act
    await cart.Abrir_cart(page);
    
    ///Assert
    await cart.Confirmar_redirecionamento_carrinho(page);
});