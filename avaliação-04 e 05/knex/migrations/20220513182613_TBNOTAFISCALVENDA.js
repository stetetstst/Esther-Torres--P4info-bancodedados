/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('TBNOTAFISCALVENDA', table => {
        table.increments('id').primary()

        table.float('valorNota').notNullable()

        table.integer('código').notNullable()

        table.foreign('cliente.id').references('TBCLIENTE.id')

        table.foreign('itens').references('TBITEMNOTAFISCAL.id')

        table.timestamp('data')
              .defaultTo(knex.fn.now())
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TBNOTAFISCALVENDA')
};