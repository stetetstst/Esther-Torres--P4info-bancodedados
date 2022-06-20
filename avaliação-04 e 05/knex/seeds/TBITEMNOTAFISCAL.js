/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('TBITEMNOTAFISCAL').del()
  await knex('TBITEMNOTAFISCAL').insert([
    {id: 1, sequencial: '235', quantidade: "7", valor: "14.00", produto_id: "1", notaFiscal_id: "10", TipoCliente: "Pessoa_Fisica"},
    {id: 2, sequencial: '654', quantidade: "2", valor: "42.50", produto_id: "2", notaFiscal_id: "20", TipoCliente: "Pessoa_Juridica"},
    {id: 3, sequencial: '125', quantidade: "9", valor: "67.00", produto_id: "3", notaFiscal_id: "30", TipoCliente: "Pessoa_Fisica"},
  ]);
};