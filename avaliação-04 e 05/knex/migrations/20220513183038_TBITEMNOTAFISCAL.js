/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('TBITEMNOTAFISCAL', table => {
        table.increments('id').primary()

        table.integer('sequencial').notNullable()

        table.integer('valor').notNullable()

        table.integer('quantidade').notNullable()

        table.foreign('produto.id').references('TBPRODUTO.id')

        table.foreign('notaFiscal.id').references('TBNOTAFISCALVENDA.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TBITEMNOTAFISCAL')
};