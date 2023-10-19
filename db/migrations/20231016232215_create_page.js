/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    const tableExists = await knex.schema.hasTable('pages');
    if (!tableExists) {
        return knex.schema.createTable('pages', (table) => {
            table.increments('page_id').primary();
            table.string('title').notNullable();
            table.text('description').notNullable();
            table.dateTime('creation_date').defaultTo(knex.fn.now());
            table.dateTime('last_update').defaultTo(knex.fn.now());
            table.string('current_version').notNullable();
            table.boolean('isMod').notNullable();
            table.text('page_link');
            table.text('ip_server');
            table.integer('auth_id').unsigned().notNullable();
            table.foreign('auth_id').references('sub_id').inTable('subscribers');
        }
    )}
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    // Drop the tables in the desired order.
    return knex.schema
        .dropTableIfExists('rates')
        .then(() => knex.schema.dropTableIfExists('pages'))
        .then(() => knex.schema.dropTableIfExists('subscribers'));
};
