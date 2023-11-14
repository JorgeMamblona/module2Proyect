require("dotenv").config()
require("./db")

const express = require("express")
const hbs = require("hbs")

const app = express()

require("./config")(app)

require("./config/session.config")(app)

app.locals.appTitle = `POKEMON`

app.use((req, res, next) => {
    //app.locals.loggedUser = req.session.currentUSer
    next()
})

require("./routes")(app)

require("./error-handling")(app)


module.exports = app
