/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

 exports.seed = function(knex) {
  return knex('TBCLIENTE').truncate()
    .then(function () {
      return knex('TBCLIENTE').insert([
        {id: 1, codigo: '312', cnpjcpf: '235-214-162-34', nome: "Daniel", TipoCliente: "Pessoa_Fisica"},
        {id: 2, codigo: '645', cnpjcpf: '646-754-235-90', nome: "Giselle", TipoCliente: "Pessoa_Fisica"},
        {id: 3, codigo: '753', cnpjcpf: '324-325-776-75', nome: "Barros", TipoCliente: "Pessoa_Fisica"},
      ]);
  });
};
