import cart from '../pages/cart';
import Login from '../pages/login';
import Inventory from '../pages/inventory';
import { dados as D } from '../pages/dados';
import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  //Arrange
  await Login.Acessar_pagina(page);
  await Login.Realizar_login(page, D.usuario_valido, D.senha);
  await Inventory.Adicionar_item(page, D.onisie_ID_2);
  await cart.Abrir_cart(page);
});

test('Verificar carrinho', async ({ page }) => {
  ///Assert
  await cart.Confirmar_redirecionamento_carrinho(page);

});

test('Acessar Checkout', async ({ page }) => {
  ///Act
  await cart.Acessar_Checkout(page);

  ///Assert
  await cart.Confirmar_redirecionamento_checkout(page);
  
});