const express = require('express');
const path = require('path');
const app = express();

// import the routes
const route = require("./routes/main");

// set up template engine ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// set up public folder as a static, so we could use the CSS inside in our HTML pages
app.use(express.static(path.join(__dirname, 'public')));

// make sure the app can handle requests with JSON
app.use(express.json());

app.use(route);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});