// lib/app.ts
import express = require('express');
import Speek from './Speek';

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res)
{
    const speek = new Speek();
    speek.sayHellow("hhhi!");

    res.send('Hello World!');
});

app.listen(3000, function ()
{
    console.log('Example app listening on port 3000!');
});