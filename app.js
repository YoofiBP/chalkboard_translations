const express = require('express');
const {getTranslation} = require("./translations");
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json())


app.post('/translations', async (req, res) => {
    try {
        const translationKeys = JSON.parse(req.body.translationKeys);
        const translations = await Promise.all(translationKeys.map(key => getTranslation(key)));
        const payload = {};
        translations.forEach(translation => Object.assign(payload, translation));
        return res.status(200).json(payload);
    } catch (e) {
        console.log(e)
        return res.status(500).send(e)
    }

})

module.exports = app;