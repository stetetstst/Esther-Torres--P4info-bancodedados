/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('TBPRODUTO').del()
  await knex('TBPRODUTO').insert([
    {id: 1, codigo: '1', descricao: "Água", valor: 4.50},
    {id: 2, codigo: '2', descricao: "Ovos", valor: 313.00},
    {id: 3, codigo: '3', descricao: "Geleia", valor: 2.00},
  ]);
};