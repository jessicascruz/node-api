const express = require ('express');
const consign = require ('consign');

const PORT = 3000;
const app = express();


consign()
    .include("routes")
    .into(app);


app.listen(PORT, () => console.log(`NTask API _ porta ${PORT}`));
