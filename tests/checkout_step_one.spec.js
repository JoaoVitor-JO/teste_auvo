import { test, expect } from '@playwright/test';
import Login from '../pages/login'
import Inventory from '../pages/inventory/'
import cart from '../pages/cart';
import { dados as D } from '../pages/dados';
import checkout_step_one from '../pages/checkout_step_one';

test.beforeEach(async({page})=>{
  ///Arrange
  await Login.Acessar_pagina(page);
  await Login.Realizar_login(page, D.usuario_valido, D.senha);
  await Inventory.Adicionar_item(page, D.onisie_ID_2);
  await cart.Abrir_cart(page);
  await cart.Acessar_Checkout(page);
});

test('Prencher Dados', async ({ page }) => {
  ///Act
  await checkout_step_one.Preencher_dados(page,D.username_0,D.lastname_0,D.cep_0);

  ///Assert
  await checkout_step_one.Verificar_dados(page,D.username_0,D.lastname_0,D.cep_0);

});

test('Verificar botão checkout two', async ({ page }) => {
  ///Act
  await checkout_step_one.Preencher_dados(page,D.username_0,D.lastname_0,D.cep_0);
  await checkout_step_one.Continuar_para_checkout(page);

  ///Assert
  await checkout_step_one.Verificar_URL_checkout_two(page);
});


