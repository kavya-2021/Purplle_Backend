const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.use(express.static("public"));


// crud for the ejs control of facemakeup products

const faceController = require('./controllers/face.controller');

app.use("/faceproducts",faceController);

// crud for the ejs control of hairCare products

const hairController = require('./controllers/hair.controller');

app.use("/hairproducts",hairController);

// crud for the ejs control of Skin-Care products

const skinController = require('./controllers/skin.controller');

app.use("/skinproducts",skinController);

// crud for the ejs control of all products

const productController = require('./controllers/product.controller');

app.use("/products",productController);


module.exports = app
