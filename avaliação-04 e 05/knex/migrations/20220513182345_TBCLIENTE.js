/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('TBCLIENTE', table => {
        table.increments('id').primary()

        table.string('nome').notNullable()

        table.string('cpfcnpj').notNull().unique()

        table.integer('código').notNullable()

        table.enum('TipoCliente', ['Pessoa_Fisica', 'Pessoa_Juridica']).defaultTo('Pessoa_Fisica')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TBCLIENTE')
};