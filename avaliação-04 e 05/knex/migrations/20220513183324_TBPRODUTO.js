/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('TBPRODUTO', table => {
        table.increments('id').primary()

        table.integer('codigo').notNullable()

        table.integer('descriçao').notNullable()

        table.float('valor').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TBPRODUTO')
};