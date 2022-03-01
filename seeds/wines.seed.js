const wines = [
  {
    aging: "Crianza",
    bio: false,
    country: "Spain",
    name: "Viña Godeval",
    type: "White Wine",
    grapes:["Godello"],
    vintage: "2020",
    image: "../public/images/Viña Godeval.jpeg",
  },
  {
    aging: "Great Reserve",
    bio: false,
    country: "Germany",
    name: "Joel Gott",
    type: "White Wine",
    grapes:["Chardonnay"],
    vintage: "2020",
    image: "../public/images/Joel_Gott.webp"
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Spain",
    name: "Las Beatas",
    type: "Red Wine",
    grapes: ["Tempranillo", "Garnacha", "Graciano"],
    vintage: "2017",
    image: "../public/images/LAS_BEATAS.jpeg"
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Spain",
    name: "La Faraona",
    type: "Red Wine",
    grapes: ["Mencia"],
    vintage: "2018",
    image: "../public/images/La_Faraona.jpeg",
  },
  {
    aging: "Crianza",
    bio: false,
    country: "Spain",
    name: "Nussbaumer",
    type: "White Wine",
    grapes: ["Gewürztraminer"],
    vintage: "2021",
    image: "../public/images/Nussbaumer.jpeg",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "USA",
    name: "Ken Wright Cellars",
    type: "Red Wine",
    grapes: ["Pinot Noir"],
    vintage: "2016",
    image: "../public/images/Ken_Wright.jpeg",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "USA",
    name: "Aubert UV-SL",
    type: "Red Wine",
    grapes: ["Pinot Noir"],
    vintage: "2016",
    image: "../public/images/Aubert.png"
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Italien",
    name: "San Filippo",
    type: "Red Wine",
    grapes: ["Sangiovese"],
    vintage: "2017",
    image: "../public/images/san_filippo.webp",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "USA",
    name: "Macayamas",
    type: "Red Wine",
    grapes: ["Cabernet Sauvignon"],
    vintage: "2015",
    image: "../public/images/mayacamas.png",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "France",
    name: "Domaine de la Vieille Julienne",
    type: "Red Wine",
    grapes: ["Garnacha"],
    vintage: "2016",
    image: "../public/images/Vielle_Julienne.png",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "USA",
    name: "Kistler",
    type: "White Wine",
    grapes: ["Chardonnay"],
    vintage: "2019",
    image: "../public/images/Kistler.webp",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Argentina",
    name: "Los Chacayes",
    type: "Red Wine",
    grapes: ["Cabernet Sauvignon", "Malbec"],
    vintage: "2015",
    image: "../public/images/Los_Chacayes.jpeg",
  },
  {
    aging: "Crianza",
    bio: false,
    country: "New Zeland",
    name: "Allan Scott",
    type: "White Wine",
    grapes: ["Sauvignon Blanc"],
    vintage: "2018",
    image: "../public/images/Allan_Scott.png",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "France",
    name: "Clos de Beze",
    type: "Red Wine",
    grapes: ["Pinot Noir"],
    vintage: "2008",
    image: "../public/images/Clos-de-Beze.jpeg",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Australia",
    name: "BIN 28 Kalimna",
    type: "Red Wine",
    grapes: ["Shiraz"],
    vintage: "2019",
    image: "../public/images/kalimna.png",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Chile",
    name: "Los Vascos",
    type: "White Wine",
    grapes: ["Sauvignon Blanc"],
    vintage: "2020",
    image: "../public/images/los_vascos.png",
  },
  {
    aging: "Reserve",
    bio: true,
    country: "France",
    name: "Trimbach",
    type: "White Wine",
    grapes: ["Riesling"],
    vintage: "2018",
    image: "../public/images/Trimbrach.webp",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Italia",
    name: "Boscarelli",
    type: "Red Wine",
    grapes: ["Sangiovese"],
    vintage: "2016",
    image: "../public/images/boscarelli.png",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "Argentina",
    name: "Bousquet",
    type: "Red Wine",
    grapes: [ "Cabernet Sauvignon","Malbec","Merlot","Syrah"],
    vintage: "2012",
    image: "../public/images/bousquet.png",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "Australia",
    name: "Vasse Felix",
    type: "Red Wine",
    grapes: ["Cabernet Sauvignon","Merlot"],
    vintage: "2016",
    image: "../public/images/Vasse_Felix.png",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "South Africa",
    name: "Southern Right",
    type: "White Wine",
    grapes: ["Sauvignon Blanc"],
    vintage: "2018",
    image: "../public/images/Southern-Rigth.png",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "New Zealand",
    name: "Invivo",
    type: "White Wine",
    grapes: ["Sauvignon Blanc"],
    vintage: "2020",
    image: "../public/images/Invivo.png",
  },
  {
    aging: "Reserve",
    bio: false,
    country: "France",
    name: "Domaine de la Vieille Julienne",
    type: "Red Wine",
    grapes: ["Garnacha"],
    vintage: "2016",
    image: "../public/images/Vielle_Julienne.png",
  },
  {
    aging: "",
    bio: true,
    country: "USA",
    name: "Kistler",
    type: "White Wine",
    grapes: ["Chardonnay"],
    vintage: "2019",
    image: "../public/images/Kistler.webp",
  },
  {
    aging: "Crianza",
    bio: true,
    country: "Argentina",
    name: "De Sangre",
    type: "Red Wine",
    grapes: ["Malbec"],
    vintage: "2018",
    image: "../public/images/luigi-bosca.jpeg",
  },
];

const Wine = require("../models/Wine.model");

// insertar en la BD
const mongoose = require("mongoose");

mongoose
  .connect()
  .then((response) => {
    console.log("conectados a la BD");

    return Wine.insertMany(wines);
  })
  .then((response) => {
    console.log("Wines agregados correctamente");

    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
