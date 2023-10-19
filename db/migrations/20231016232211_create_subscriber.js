/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    const tableExists = await knex.schema.hasTable('subscribers');
    if (!tableExists) {
        return knex.schema.createTable('subscribers', (table) => {
            table.increments('sub_id').primary();
            table.string('pseudo').notNullable();
            table.string('password').notNullable();
            table.string('email').notNullable();
            table.dateTime('creation_date').defaultTo(knex.fn.now());
            table.dateTime('last_login').defaultTo(knex.fn.now());
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