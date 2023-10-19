exports.seed = function(knex) {
  let pageIds;
  return knex('subscribers').del()
    .then(function () {
      return knex('subscribers').insert([
        {
          pseudo: 'admin',
          password: 'test',
          email: 'admin@localhost.fr',
          creation_date: '2023-10-16T08:30:00Z',
          last_login: '2023-10-17T15:45:00Z'
        },
        {
          pseudo: 'Marcopolo',
          password: '123456789',
          email: 'marco.arrighi@orange.fr',
          creation_date: '2023-10-15T12:20:00Z',
          last_login: '2023-10-16T09:30:00Z'
        },
      ]);
    })
    .then(function () {
      return knex('subscribers').select('sub_id');
    })
    .then(function (userIds) {
      return knex('pages').insert([
        {
          title: 'Hypixel',
          description: 'Hypixel is a Minecraft server created on April 14, 2013, by Simon Collins-Laflamme and Philippe Touchette, and is managed by Hypixel Inc. Hypixel is only available on the Java Edition of Minecraft, but was formerly available on the Bedrock Edition of the game as well. Hypixel is one of the largest and highest quality Minecraft Server Networks in the world, featuring original and fun games such as Skyblock, BedWars, SkyWars, and many more!',
          creation_date:'2013-04-04T00:00:00Z',
          last_update: knex.raw('current_timestamp'),
          current_version: '1.8.9',
          isMod: false,
          page_link:'https://hypixel.net',
          ip_server:'mc.hypixel.net',
          auth_id: userIds[0].sub_id,
        },
        {
          title: 'Optifine',
          description: 'OptiFine is a Minecraft optimization mod. It allows Minecraft to run faster and look better with full support for HD textures and many configuration options.',
          creation_date:'2011-07-08T00:00:00Z',
          last_update: knex.raw('current_timestamp'),
          current_version: '1.20.1',
          isMod: true,
          page_link:'https://optifine.net/downloads',
          auth_id: userIds[1].sub_id,
        },
      ]);
    })
    .then(function () {
      return knex('pages').select('page_id'); 
    })
    .then(function (result) {
      pageIds = result; 
      return knex('subscribers').select('sub_id');
    })
    .then(function (userIds) {
      return knex('rates').insert([
        {
          sub_id: userIds[0].sub_id,
          page_id: pageIds[0].page_id, 
          rate_value: 5,
          favorite: true
        },
        {
          sub_id: userIds[0].sub_id,
          page_id: pageIds[1].page_id, 
          rate_value: 4,
          favorite: true
        },
      ]);
    });
};
