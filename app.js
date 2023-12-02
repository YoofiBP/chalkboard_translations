const express = require('express');
const {getTranslation} = require("./translations");
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json())


app.get('/translations', async (req, res) => {
    try {
        const translations = await getTranslation();
        const payload = {};
        translations.forEach(translation => Object.assign(payload, translation));
        return res.status(200).json(payload);
    } catch (e) {
        console.log(e)
        return res.status(500).send(e)
    }

})

module.exports = app;