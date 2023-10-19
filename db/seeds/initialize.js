exports.seed = function(knex) {
  let pageIds;
  return knex('subscribers').del()
    .then(function () {
      return knex('subscribers').insert([
        {
          pseudo: 'grenzo',
          password: '12345',
          email: 'enzo.greiner@efrei.net',
          creation_date: new Date('2023-10-16T08:30:00Z'),
          last_login: new Date('2023-10-17T15:45:00Z'),
        },
      ]);
    })
    .then(function () {
      return knex('subscribers').select('sub_id');
    })
    .then(function (userIds) {
      return knex('pages').insert([
        {
          title: 'Obyg',
          description: 'The "Oh, the Biomes You ll Go!" mod is a beloved and expansive addition to the world of Minecraft. This mod introduces a wide range of new biomes, each with its own distinctive terrain, vegetation, and atmosphere. These biomes offer players exciting and diverse landscapes to explore, fostering a renewed sense of adventure and discovery.',
          current_version: '1.19.4',
          isMod: true,
          page_link:'https://www.curseforge.com/minecraft/mc-mods/oh-the-biomes-youll-go',
          auth_id: userIds[0].sub_id,
        },
        {
          title: 'Create',
          description: 'The "Create" mod is an extraordinary and innovative addition to the world of Minecraft, offering players a vast array of mechanical and engineering possibilities. This mod introduces a comprehensive set of mechanical components, contraptions, and automation tools, empowering players to design complex machines and systems. ',
          current_version: '1.20.1',
          isMod: true,
          page_link:'https://www.curseforge.com/minecraft/mc-mods/create',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Milleniale',
          description: 'The "Millénaire" mod is an exceptional and immersive addition to the world of Minecraft, introducing a vibrant and culturally diverse array of villages and NPCs (non-player characters) to the game. This mod transforms the player s world by bringing it to life with a rich tapestry of cultures, quests, and interactions.',
          current_version: '1.12.2',
          isMod: true,
          page_link:'https://www.curseforge.com/minecraft/mc-mods/millenaire',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Alcocraft',
          description:'Alcocraft is about brewing and drinking alcohol. Build your own hop farm. Craft your first Keg and start brewing alcohol. There are currently 12 types of drinks available in the mod. Each of them has its own special effects that will spice up your survival experience. As soon as the alcohol is brewed, call your friends and share with them the coolness of a delicious drink.',
          current_version:'1.19',
          isMod: true,
          page_link:'https://www.curseforge.com/minecraft/mc-mods/alcocraft-beer-and-stuff',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Galacticraft',
          description:'The "Galacticraft" mod is a stellar and ambitious expansion for Minecraft, allowing players to embark on extraterrestrial adventures by venturing into the cosmos. This mod introduces an entire galaxy, complete with planets, celestial bodies, and the means to explore the vastness of space.',
          current_version:'1.12.2',
          isMod: true,
          page_link:'https://www.curseforge.com/minecraft/mc-mods/galacticraft-legacy',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Useless Sword',
          description:'Here is the Useless Sword mod, this mod adds 76 new swords in 1.16, 60 new swords in 1.15, 59 swords in 1.14 and 51 swords in 1.12 ! The swords take again objects already existing in the game where which is obtained by a mobs (install JEI to see all the recipes) I m French and this mod was done with Mcreator',
          current_version:'1.16',
          isMod: true,
          page_link:'https://www.curseforge.com/minecraft/mc-mods/useless-sword',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Complex Gaming',
          description:'Welcome to Complex Gaming! We offer many gamemodes which provide endless fun for everyone including pokemon in minecraft, skyblock, factions, survival, and much much more!',
          current_version:'1.20',
          isMod: false,
          ip_server:'mslc.mc-complex.com',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Insanity Craft',
          description:'InsanityCraft is the ideal experience for anyone who loves playing relaxed, casual, and fun gamemodes. We opened in 2012 and have continued to make our server unique.',
          current_version:'1.16.5',
          isMod: false,
          ip_server:'mc.insanitycraft.net',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Blaze Gaming',
          description:'Blaze Gaming is a Minecraft network running for over 4 years without interruption, we host a variety of fun game modes such as Pixelmon, Skyblock and Survival SMP!',
          current_version:'1.20',
          isMod: false,
          ip_server:'msl.mc-blaze.com',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Opblocks',
          description:'OPBlocks is a high-quality Minecraft Prison, Skyblock, and Survival SMP server featuring unique content and an amazing community, friendly staff, and awesome players',
          current_version:'1.20.1',
          isMod: false,
          ip_server: 'fun.opblocks.com',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Mana Cube',
          description:'Over the past 10 years, 5 million players have enjoyed our unique game modes: Parkour, Skyblock, SMP, KitPvP, Factions, Prison,...',
          current_version:'1.20.1',
          isMod: false,
          ip_server:'mcsl.manacube.com',
          auth_id: userIds[0].sub_id,
        },
        {
          title:'Teldaria',
          description:'Welcome to Teldaria Teldaria is a Survival RPG, Minecraft Experience. Dive into a fascinating world full of dark dungeons, custom monsters, custom gear,..',
          current_version:'1.20.1',
          isMod: false,
          ip_server:'mcsl.teldaria.com',
          auth_id: userIds[0].sub_id,
        }
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
          page_id: pageIds[3].page_id, 
          rate_value: 4,
          favorite: true
        },
        {
          sub_id: userIds[0].sub_id,
          page_id: pageIds[6].page_id, 
          rate_value: 4,
          favorite: true
        },
        {
          sub_id: userIds[0].sub_id,
          page_id: pageIds[9].page_id, 
          rate_value: 5,
          favorite: true
        },
      ]);
    });
};