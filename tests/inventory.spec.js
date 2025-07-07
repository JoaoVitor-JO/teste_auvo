import { test, expect } from '@playwright/test';
import inventory from '../pages/inventory';
import Login from '../pages/login';
import { dados as D } from '../pages/dados';

test.beforeEach(async({page})=>{
  /// Arrange
  await Login.Acessar_pagina(page);
  await Login.Realizar_login(page,D.usuario_valido,D.senha);
});

test('Adicionar item bacpack', async ({ page }) => {
  ///Act
  await inventory.Adicionar_item(page, D.backpack_ID_4);

  ///Assert
  await inventory.Verificar_adicao(page,"1");
});

test('Verificar detalhes backpack em inventory', async ({ page }) => {
  ///Assert
  await inventory.Verificar_item(page, D.backpack_ID_4);

});





