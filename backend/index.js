const express = require('express');

const app = express();

app.get('', (request, response) => {
    return response.send('Aula dia 1');
})

app.listen(3333);
