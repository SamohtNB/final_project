exports.seed = function(knex) {
    return knex('rates')
      .del()
      .then(() => knex('pages').del())
      .then(() => knex('subscribers').del());
  };