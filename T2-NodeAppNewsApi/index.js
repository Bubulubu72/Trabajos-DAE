const express = require('express');
const router = require('./src/routes');
const exph = require('express-handlebars');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const lib = exph.create({defaultLayout: 'main', extname: '.handlebars'});

app.use(express.static('public'));

app.engine('handlebars', lib.engine);
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(router)



app.listen(port, () => {
    console.log(`app is running in port ${port}`)
});


