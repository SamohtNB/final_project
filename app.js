// IMPORT PACKAGE
//import express from 'express'
const express = require("express");
const knexConfig = require('./knexfile.js')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(knexConfig);
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

// ROUTE = HTTP METHOD + URL

// const handler = () => { }
// const path = '/api/(mods)?(map)?(minecraft)?'

// app.get('/', (req, res) =>{
//     res.status(200).json({message : 'Response is successfully send !', status: 200});
// })


//FICHIER ACCUIEL :


app.use(express.static(__dirname + 'Final_assignment'))


app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})

app.get('/mc_tips/agree.html', (req, res) => {
    res.sendFile(__dirname + '/html/agree.html');
})

app.get('/server.html', (req, res) => {
    res.sendFile(__dirname + '/html/server.html');
})

app.get('/css/server.css', (req, res) => {
    res.sendFile(__dirname + '/css/server.css');
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})



app.get('/css/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');
})

app.get('/mc_tips/login.html', (req, res) => {
    res.sendFile(__dirname + '/html/login.html');
})

app.get('/mc_tips/sign_in.html', (req, res) => {
    res.sendFile(__dirname + '/html/sign_in.html');
})

app.get('/mc_tips/index.html', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})

app.get('/mc_tips/mc_tips.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips.html');
})

app.get('/mc_tips/mods.html', (req, res) => {
    res.sendFile(__dirname + '/html/mods.html');
})

app.get('/mc_tips/server.html', (req, res) => {
    res.sendFile(__dirname + '/html/server.html');
})
//--------------------------------------------------
// FICHIER MINECRAFT TIPS :

app.get('/mc_tips.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips.html');
})

app.get('/css/mc_tips.css', (req, res) => {
    res.sendFile(__dirname + '/css/mc_tips.css')
})

app.get('/mc_tips/mobs.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips/mobs.html');
})

app.get('/css/mc_tips/mobs.css', (req, res) => {
    res.sendFile(__dirname + '/css/mc_tips/mobs.css')
})

app.get('/mc_tips/items.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips/items.html');
})

app.get('/css/mc_tips/items.css', (req, res) => {
    res.sendFile(__dirname + '/css/mc_tips/items.css')
})

app.get('/mc_tips/blocks.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips/blocks.html');
})

app.get('/css/mc_tips/blocks.css', (req, res) => {
    res.sendFile(__dirname + '/css/mc_tips/blocks.css')
})

app.get('/mc_tips/biomes.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips/biomes.html');
})

app.get('/css/mc_tips/biomes.css', (req, res) => {
    res.sendFile(__dirname + '/css/mc_tips/biomes.css')
})

app.get('/mc_tips/dim.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips/dim.html');
})

app.get('/css/mc_tips/dim.css', (req, res) => {
    res.sendFile(__dirname + '/css/mc_tips/dim.css')
})

app.get('/mc_tips/struct.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips/struct.html');
})

app.get('/css/mc_tips/struct.css', (req, res) => {
    res.sendFile(__dirname + '/css/mc_tips/struct.css')
})

app.get('/mc_tips/cmd.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips/cmd.html');
})

app.get('/css/mc_tips/cmd.css', (req, res) => {
    res.sendFile(__dirname + '/css/mc_tips/cmd.css')
})

app.get('/mc_tips/boss.html', (req, res) => {
    res.sendFile(__dirname + '/html/mc_tips/boss.html')
})

app.get('/css/mc_tips/boss.css', (req, res) => {
    res.sendFile(__dirname + '/css/mc_tips/boss.css')
})



//--------------------------------------------------

// FICHIER MODS :

app.get('/mods.html', (req, res) => {
    res.sendFile(__dirname + '/html/mods.html');
})

app.get('/css/mods.css', (req, res) => {
    res.sendFile(__dirname + '/css/mods.css');
})




// IMAGES :
//--------------------------------------------------

app.get('/img/logo.png', (req, res) => {
    res.sendFile(__dirname + '/img/logo.png');
})

app.get('/img/back_acc.png', (req, res) =>{
    res.sendFile(__dirname + '/img/back_acc.png');
})


app.get('/img/mct_acc1.png', (req, res) => {
    res.sendFile(__dirname + '/img/mct_acc1.png');
})

app.get('/img/p_title.png', (req, res) => {
    res.sendFile(__dirname + '/img/p_title.png');
})

//-----------(Tips selector)-------------------------------
app.get('/img/creeper.png', (req, res) => {
    res.sendFile(__dirname + '/img/creeper.png');
})

app.get('/img/sword.png', (req, res) => {
    res.sendFile(__dirname + '/img/sword.png');
})

app.get('/img/block.png', (req, res) => {
    res.sendFile(__dirname + '/img/block.png');
})

app.get('/img/cmd_b.png', (req, res) => {
    res.sendFile(__dirname + '/img/cmd_b.png');
})

app.get('/img/struct.png', (req, res) => {
    res.sendFile(__dirname + '/img/struct.png');
})

app.get('/img/island.png', (req, res) => {
    res.sendFile(__dirname + '/img/island.png');
})

app.get('/img/biome.png', (req, res) => {
    res.sendFile(__dirname + '/img/biome.png');
})

app.get('/img/boss.png', (req, res) => {
    res.sendFile(__dirname + '/img/boss.png');
})

//--------------------------------------------------
//-------------------(Mobs style)-------------------

app.get('/img/livre_VF.png', (req, res) => {
    res.sendFile(__dirname + '/img/livre_VF.png');
})

// app.get('/img/livre2_VF.png', (req, res) => {
//     res.sendFile(__dirname + '/img/livre2_VF.png');
// })

app.get('/img/mob_bc.png', (req, res) => {
    res.sendFile(__dirname + '/img/mob_bc.png');
})

app.get('/img/mod_bc2.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_bc2.png');
})

app.get('/img/mod_bc3.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_bc3.png');
})

app.get('/img/mod_bc4.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_bc4.png');
})

app.get('/img/mod_bc5.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_bc5.png');
})

app.get('/img/mod_bc2.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_bc2.png');
})

app.get('/img/mod_bc6.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_bc6.png');
})

app.get('/img/zombie.png', (req, res) => {
    res.sendFile(__dirname + '/img/zombie.png');
})

app.get('/img/skeleton.png', (req, res) => {
    res.sendFile(__dirname + '/img/skeleton.png');
})



//--------------------------------------------------

//-------------------(Mobs style)-------------------

app.get('/img/d_sword.png', (req, res) => {
    res.sendFile(__dirname + '/img/d_sword.png');
})

app.get('/img/stick.png', (req, res) => {
    res.sendFile(__dirname + '/img/stick.png');
})

app.get('/img/armor.png', (req, res) => {
    res.sendFile(__dirname + '/img/armor.png');
})

app.get('/img/craft_1.png', (req, res) => {
    res.sendFile(__dirname + '/img/craft_1.png');
})

//--------------------------------------------------

//-------------------(Blocks style)-------------------

app.get('/img/dirt.png', (req, res) => {
    res.sendFile(__dirname + '/img/dirt.png');
})

app.get('/img/cobblestone.png', (req, res) => {
    res.sendFile(__dirname + '/img/cobblestone.png');
})

app.get('/img/wood_p.png', (req, res) => {
    res.sendFile(__dirname + '/img/wood_p.png');
})

//--------------------------------------------------

//-------------------(Biomes style)-------------------

app.get('/img/plains_b.png', (req, res) => {
    res.sendFile(__dirname + '/img/plains_b.png');
})

app.get('/img/mesa_b.png', (req, res) => {
    res.sendFile(__dirname + '/img/mesa_b.png');
})

app.get('/img/moutn_b.png', (req, res) => {
    res.sendFile(__dirname + '/img/moutn_b.png');
})

//--------------------------------------------------

//-------------------(Dim style)-------------------

app.get('/img/overworld.png', (req, res) => {
    res.sendFile(__dirname + '/img/overworld.png');
})

app.get('/img/nether.png', (req, res) => {
    res.sendFile(__dirname + '/img/nether.png');
})

app.get('/img/end.png', (req, res) => {
    res.sendFile(__dirname + '/img/end.png');
})

//--------------------------------------------------

//-------------------(structures style)-------------------

app.get('/img/village.png', (req, res) => {
    res.sendFile(__dirname + '/img/village.png');
})

app.get('/img/temple_d.png', (req, res) => {
    res.sendFile(__dirname + '/img/temple_d.png');
})

app.get('/img/temple_j.png', (req, res) => {
    res.sendFile(__dirname + '/img/temple_j.png');
})

//--------------------------------------------------

//-------------------(commande style)-------------------

app.get('/img/cmd.png', (req, res) => {
    res.sendFile(__dirname + '/img/cmd.png');
})

//-------------------(sign_in/login)-------------------------------


app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/html/login.html');
})

app.get('/css/login.css', (req, res) => {
    res.sendFile(__dirname + '/css/login.css');
})

app.get('/sign_in.html', (req, res) => {
    res.sendFile(__dirname + '/html/sign_in.html');
})

app.get('/css/sign_in.css', (req, res) => {
    res.sendFile(__dirname + '/css/sign_in.css');
})

//Database relations
app.use('/icons', express.static(path.join(__dirname, 'icons')));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'js')));

app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/html/login.html');
})

app.get('/css/login.css', (req, res) => {
    res.sendFile(__dirname + '/css/login.css');
})

app.get('/sign_in.html', (req, res) => {
    res.sendFile(__dirname + '/html/sign_in.html');
})

app.get('/css/sign_in.css', (req, res) => {
    res.sendFile(__dirname + '/css/sign_in.css');
})


app.get('/img/back.png', (req, res) => {
    res.sendFile(__dirname + '/img/back.png');
})

// Handle POST requests to /create_sub
app.post('/create_sub', async (req, res) => {
    const { pseudo, password, email } = req.body;
    if (!pseudo || !password || !email) {
        return res.status(400).send("Please fill all the fields");
    }
    var data = {
        pseudo: pseudo,
        password: password,
        email: email
    };
    try{
        await knex('subscribers').insert(data);
        return res.status(200).send("Data inserted successfully");
    }catch(e){
        return res.status(500).send("Error: "+e);
    }
});

// Handle post requests to /login_sub
app.post('/login_sub', async (req, res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        alert("Please fill all the fields");
    }   
    var dataTBC = {
        email: email,
        password: password
    };

    try{
        const response = await knex('subscribers').where(dataTBC).select('pseudo');
        if(response.length > 0){
            return res.status(200).send(response);
        }else{
            return res.status(400).send(response);
        }
    }catch(e){
        return res.status(500).send("Error: "+e);
    }
});
//--------------------------------------------------

//-------------------(mods style)-------------------

app.get('/img/mod_1.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_1.png');
})

app.get('/img/mod_2.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_2.png');
})

app.get('/img/mod_3.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_3.png');
})

app.get('/img/mod_4.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_4.png');
})

app.get('/img/mod_5.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_5.png');
})

app.get('/img/mod_6.png', (req, res) => {
    res.sendFile(__dirname + '/img/mod_6.png');
})

//--------------------------------------------------

//-------------------(server style)-------------------

app.get('/img/serv_1.png', (req, res) => {
    res.sendFile(__dirname + '/img/serv_1.png');
})

app.get('/img/serv_2.png', (req, res) => {
    res.sendFile(__dirname + '/img/serv_2.png');
})

app.get('/img/serv_3.png', (req, res) => {
    res.sendFile(__dirname + '/img/serv_3.png');
})

app.get('/img/serv_4.png', (req, res) => {
    res.sendFile(__dirname + '/img/serv_4.png');
})

app.get('/img/serv_5.png', (req, res) => {
    res.sendFile(__dirname + '/img/serv_5.png');
})

app.get('/img/serv_6.png', (req, res) => {
    res.sendFile(__dirname + '/img/serv_6.png');
})


//--------------------------------------------------

app.get('/img/agree.png', (req, res) => {
    res.sendFile(__dirname + '/img/agree.png');
})
 
app.get('/items.js', (req, res) => {
    res.sendFile(__dirname + '/items.js');
})

app.get('/agree.js', (req, res) => {
    res.sendFile(__dirname + '/agree.js');
})

app.get('/boss.js', (req, res) => {
    res.sendFile(__dirname + '/boss.js');
})

app.get('/agree.html', (req, res) => {
    res.sendFile(__dirname + '/html/agree.html');
})

app.get('/css/agree.css', (req, res) => {
    res.sendFile(__dirname + '/css/agree.css');
})

/* -------------------------------------------------------- */

app.get('/img/back_boss.png', (req, res) => {
    res.sendFile(__dirname + '/img/back_boss.png');
})

app.get('/img/dragon.png', (req, res) => {
    res.sendFile(__dirname + '/img/dragon.png');
})


app.get('/img/wither.png', (req, res) => {
    res.sendFile(__dirname + '/img/wither.png');
})


app.get('/img/warden.png', (req, res) => {
    res.sendFile(__dirname + '/img/warden.png');
})

app.get('/img/guardian.png', (req, res) => {
    res.sendFile(__dirname + '/img/guardian.png');
})

app.get('/img/herobrine.png', (req, res) => {
    res.sendFile(__dirname + '/img/herobrine.png');
})


app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found !</h1>');
})





// const path = 
// const handler =

// CREATE A SERVER 
const port = 3018;
app.listen(port, () => {
    console.log("The server has started on the port 3018 !");
});