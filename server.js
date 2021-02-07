// imports

const express = require("express");
const app = express();
const Handlebars = require("handlebars");
const handlebars = require("express-handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyParser = require("body-parser");
const handlers = require("./routes/handlers");
const db = require("./models");
const PORT = 8081;

// CONFIGS SECTIONS

    //css
    app.use(express.static("public/"));

    //template engine
    app.engine("handlebars", handlebars({ defaultLayout: "main" },handlebars({handlebars: allowInsecurePrototypeAccess(Handlebars)})));
    app.set("view engine", "handlebars");

    //body parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

//ROUTES

app.use("/", handlers);

//THIS SECTION CREATES THE NECESSARY TABLES AND RUNS THE SERVER

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`listen on http://localhost:${PORT}`);
    });
})

