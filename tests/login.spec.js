import Login from '../pages/login';
import { dados as d } from '../pages/dados';
import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
  /// Arrange
  await Login.Acessar_pagina(page);
  
});

test('Login valido', async ({ page }) => {
  ///Act
  await Login.Realizar_login(page,d.usuario_valido,d.senha);
  
  ///Accert
  await Login.Confirmar_redirecionamento_inventory(page);
});

test('Login bloqueado', async ({ page }) => {
  ///Act
  await Login.Realizar_login(page,d.usuario_bloqueado,d.senha);
  
  ///Accert
  await Login.Confirmar_bloqueio(page);
});

test('Login senha invalida', async ({ page }) => {
 ///Act
  await Login.Realizar_login(page,d.usuario_bloqueado,d.senha_invalida);
  
  ///Accert
  await Login.Confirmar_bloqueio(page);
});

test('Login usuario invalido', async ({ page }) => {
 ///Act
  await Login.Realizar_login(page,d.usuario_invalido,d.senha_invalida);
  
  ///Accert
  await Login.Confirmar_bloqueio(page);
});

test('Login usuario problemas', async ({ page }) => {
  ///Act
  await Login.Realizar_login(page,d.usuario_probelmas,d.senha);
  
  ///Accert
  await Login.Confirmar_redirecionamento_inventory(page);
});

test('Login mau desempenho', async ({ page }) => {
  ///Act
  await Login.Realizar_login(page,d.usuario_desempenho_ruim,d.senha);
  
  ///Accert
  await Login.Confirmar_redirecionamento_inventory(page);
});

test('Login erros', async ({ page }) => {
  ///Act
  await Login.Realizar_login(page,d.usuario_erros,d.senha);
  
  ///Accert
  await Login.Confirmar_redirecionamento_inventory(page);
});

test('Login erro visual', async ({ page }) => {
  ///Act
  await Login.Realizar_login(page,d.usuario_erro_visual,d.senha);
  
  ///Accert
  await Login.Confirmar_redirecionamento_inventory(page);
});