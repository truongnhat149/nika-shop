const handlebars = require('express-handlebars');
const express = require('express');
const path = require('path');

const router = require('./routes');

const app = express();
const port = 3000;

// file public
app.use(express.static(path.join(__dirname, 'public')));


// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views' ));

// init router
router(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});