const knex = require("../db/db.js");
const express = require('express');
const app = express();
const db = require('./knexfile.js')[process.env.NODE_ENV || 'development'];

//this is a function that take the data from the form and send it to the server
//it input data in the page table
async function create_page() {
    var type = document.getElementById("type").value;
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var current_version = document.getElementById("current_version").value;
    var download_link = document.getElementById("download_link").value;
    var server_link = document.getElementById("server_link").value;

    if (!title || !description || !current_version) {
        alert("Please fill all the fields");
        return;
    }
    if (type == "server") {
        var data = {
            title: title,
            description: description,
            current_version: current_version,
            server_link: server_link
        }
    } else if (type == "mod") {
        var data = {
            title: title,
            description: description,
            current_version: current_version,
            download_link: download_link
        }
    } else{
        alert("Please select a type");
    }
    try{
        knex('pages').insert(data).then(function (data) {
            console.log(data)
        });
        var json = await response.json();
        if (json.status == "success") {
            alert("Page created successfully");
            window.location.href = "/";
        } else {
            alert("Error: " + json.error);
        }

    }

    catch(e){
        alert("Error: "+e);
        return;
    }
}