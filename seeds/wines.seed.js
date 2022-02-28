const wines = [
  {
    aging: "Great Reserve",
    bio: false,
    country: "Spain",
    name: "Vega Sicilia Unico",
    type: "Red Wine",
    grapes: {
      1: "Cabernet Sauvignon",
      2: "Malbec",
      3: "Merlot",
      4: "Tempranillo",
      5: "Albillo",
    },
    vintage: "1962",
    image: "../public/images/wines/",
  },
  {
    aging: "Great Reserve",
    bio: false,
    country: "Spain",
    name: "Pingus",
    type: "Red Wine",
    grapes: { 1: "Cabernet Sauvignon", 2: "Merlot", 3: "Tempranillo" },
    vintage: "2018",
    image: "../public/images/wines/Chacayes.png",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Spain",
    name: "Las Beatas",
    type: "Red Wine",
    grapes: { 1: "Tempranillo", 2: "Garnacha", 3: "Graciano" },
    vintage: "2017",
    image: "../public/images/wines/Chacayes.png",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Spain",
    name: "La Faraona",
    type: "Red Wine",
    grapes: { 1: "Mencia" },
    vintage: "2018",
    image: "../public/images/wines/Chacayes.png",
  },
  {
    aging: "Crianza",
    bio: false,
    country: "Spain",
    name: "L'Ermita",
    type: "Red Wine",
    grapes: { 1: "Garnacha", 2: "Cariñena" },
    vintage: "2016",
    image: "../public/images/wines/Chacayes.png",
  },
  {
    aging: "Great Reserve",
    bio: false,
    country: "Spain",
    name: "Castillo Ygay",
    type: "Red Wine",
    grapes: {
      1: "Cabernet Sauvignon",
      2: "Malbec",
      3: "Merlot",
      4: "Tempranillo",
    },
    vintage: "2010",
    image: "../public/images/wines/Castillo Ygay.webp",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "USA",
    name: "Aubert UV-SL",
    type: "Red Wine",
    grapes: { 1: "Pinot Noir" },
    vintage: "2016",
    image: "../public/images/wines/Aubert.jpeg",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Italien",
    name: "San Filippo",
    type: "Red Wine",
    grapes: { 1: "Sangiovese" },
    vintage: "2017",
    image: "../public/images/wines/San Filippo.webp",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "USA",
    name: "Macayamas",
    type: "Red Wine",
    grapes: { 1: "Cabernet Sauvignon" },
    vintage: "2016",
    image: "../public/images/wines/Macayamas.jpeg",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "France",
    name: "Domaine de la Vieille Julienne",
    type: "Red Wine",
    grapes: { 1: "Garnacha" },
    vintage: "2016",
    image: "../public/images/wines/Vieille Julienne.png",
  },
  {
    aging: "",
    bio: true,
    country: "USA",
    name: "Kistler",
    type: "White Wine",
    grapes: { 1: "Chardonnay" },
    vintage: "2019",
    image: "../public/images/wines/Kistler.png",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Argentina",
    name: "Los Chacayes",
    type: "Red Wine",
    grapes: {
      1: "Cabernet Sauvignon",
      2: "Malbec",
    },
    vintage: "2015",
    image: "../public/images/wines/Chacayes.png",
  },
  {
    aging: "Crianza",
    bio: false,
    country: "New Zeland",
    name: "Allan Scott",
    type: "White Wine",
    grapes: { 1: "Sauvignon Blanc" },
    vintage: "2018",
    image: "../public/images/wines/Allan Scott.png",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "France",
    name: "Clos de Beze",
    type: "Red Wine",
    grapes: {
      1: "Pinot Noir",
    },
    vintage: "2017",
    image: "../public/images/wines/",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Australia",
    name: "Kalimna",
    type: "Red Wine",
    grapes: { 1: "Shiraz" },
    vintage: "2018",
    image: "../public/images/wines/",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Chile",
    name: "Los Vascos",
    type: "White Wine",
    grapes: { 1: "Sauvignon Blanc" },
    vintage: "2020",
    image: "../public/images/wines/Chacayes.png",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Spain",
    name: "La Faraona",
    type: "Red Wine",
    grapes: { 1: "Mencia" },
    vintage: "2018",
    image: "../public/images/wines/Chacayes.png",
  },
  {
    aging: "Crianza",
    bio: false,
    country: "Spain",
    name: "L'Ermita",
    type: "Red Wine",
    grapes: { 1: "Garnacha", 2: "Cariñena" },
    vintage: "2016",
    image: "../public/images/wines/Chacayes.png",
  },
  {
    aging: "Great Reserve",
    bio: false,
    country: "Spain",
    name: "Castillo Ygay",
    type: "Red Wine",
    grapes: {
      1: "Cabernet Sauvignon",
      2: "Malbec",
      3: "Merlot",
      4: "Tempranillo",
    },
    vintage: "2010",
    image: "../public/images/wines/Castillo Ygay.webp",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "USA",
    name: "Aubert UV-SL",
    type: "Red Wine",
    grapes: { 1: "Pinot Noir" },
    vintage: "2016",
    image: "../public/images/wines/Aubert.jpeg",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Italien",
    name: "San Filippo",
    type: "Red Wine",
    grapes: { 1: "Sangiovese" },
    vintage: "2017",
    image: "../public/images/wines/San Filippo.webp",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "USA",
    name: "Macayamas",
    type: "Red Wine",
    grapes: { 1: "Cabernet Sauvignon" },
    vintage: "2016",
    image: "../public/images/wines/Macayamas.jpeg",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "France",
    name: "Domaine de la Vieille Julienne",
    type: "Red Wine",
    grapes: { 1: "Garnacha" },
    vintage: "2016",
    image: "../public/images/wines/Vieille Julienne.png",
  },
  {
    aging: "",
    bio: true,
    country: "USA",
    name: "Kistler",
    type: "White Wine",
    grapes: { 1: "Chardonnay" },
    vintage: "2019",
    image: "../public/images/wines/Kistler.png",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Argentina",
    name: "Los Chacayes",
    type: "Red Wine",
    grapes: {
      1: "Cabernet Sauvignon",
      2: "Malbec",
    },
    vintage: "2015",
    image: "../public/images/wines/Chacayes.png",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "New Zeland",
    name: "Allan Scott",
    type: "White Wine",
    grapes: { 1: "Sauvignon Blanc" },
    vintage: "2018",
    image: "../public/images/wines/Allan Scott.png",
  },
];

const Wine = require("../models/Wine.model");

// insertarla en la BD
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/wine-project")
  .then((response) => {
    console.log("conectados a la BD");

    return Wine.insertMany(wines);
  })
  .then((response) => {
    console.log("Wines agregados correctamente");

    // ? hacer la desconexion
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });