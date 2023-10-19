
exports.up = async function(knex) {
    const tableExists = await knex.schema.hasTable('rates');
    if (!tableExists) {
      return knex.schema.createTable('rates', (table) => {
        table.increments('rate_id').primary();
        table.integer('sub_id').unsigned();
        table.foreign('sub_id').references('sub_id').inTable('subscribers');
        table.integer('page_id').unsigned().notNullable();
        table.foreign('page_id').references('page_id').inTable('pages');
        table.integer('rate_value');
        table.boolean('favorite').defaultTo(false);
      }
    )}
};  


exports.down = function(knex) {
    // Drop the tables in the desired order.
    return knex.schema
        .dropTableIfExists('rates')
        .then(() => knex.schema.dropTableIfExists('pages'))
        .then(() => knex.schema.dropTableIfExists('subscribers'));
};