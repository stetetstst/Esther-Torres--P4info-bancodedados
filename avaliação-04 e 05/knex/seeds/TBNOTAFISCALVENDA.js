/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('TBNOTAFISCALVENDA').del()
    await knex('TBNOTAFISCALVENDA').insert([
      {id: 1, codigo: "1", data: "12/07", valorNota: "423", cliente_id: "1", itemNotaFiscal_id: "10"},
      {id: 2, codigo: "2", data: "09/12", valorNota: "645", cliente_id: "2", itemNotaFiscal_id: "20"},
      {id: 3, codigo: "3", data: "07/04", valorNota: "212", cliente_id: "3", itemNotaFiscal_id: "30"},
    ]);
  };