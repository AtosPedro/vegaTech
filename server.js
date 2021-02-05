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

// configs

//css
app.use(express.static(__dirname + "/public/"));

//template engine
app.engine("handlebars", handlebars({ defaultLayout: "main" },handlebars({handlebars: allowInsecurePrototypeAccess(Handlebars)})));
app.set("view engine", "handlebars");

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes

app.use("/", handlers);

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`listen on http://localhost:${PORT}`);
    });
})

Handlebars.registerHelper('isEuqualId', function (idIteration, idOption ) {
    return idIteration == idOption;
})
Handlebars.registerHelper("if", function(conditional, options) {
    if (conditional) {
      return options.fn(this);
    }
  });