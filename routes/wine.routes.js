const router = require("express").Router();

// Require the User model in order to interact with the database
const UserModel = require("../models/User.model");
const WineModel = require("../models/Wine.model");
const CommentModel = require("../models/Comment.model");

// Require necessary (isLoggedOut and isLoggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/allWines", async (req, res, next) => {
  const allWines = await WineModel.find();
  try {
    res.render("wine/allWines", {allWines})
  }catch (err) {
    next(err);
  }
})

router.get("/wine-details", async (req, res, next) => {
  const wineDetails = await WineModel.findById();
  try {
    res.render("wine/wine-details", {wineDetails})
  }catch (err) {
    next(err);
  }
})

// GET "/wine/create"

router.get("/addWine", async (req, res, next) => {
  const addWine = await WineModel.find();
  try {
    res.render("wine/addWine.hbs", { addWine });
  } catch (err) {
    next(err);
  }
}),

  //POST "/wines/create"
  router.post("/addWine", async (req, res, next) => {
    const { name, aging, grapes, vintage, country, bio, type } = req.body;
    try {
      await WineModel.create({
        name,
        aging,
        grapes,
        vintage,
        country,
        bio,
        type,
      });
      res.redirect("/main");
    } catch (err) {
      next(err);
    }
  });

//   .then((createdBook) => {
//     //en este punto hemos creado el libro
//     //? que queremos hacer con el usuario despues de crear el libro
//     // nuevo método para redirigir al usuario a otra ruta
//     //res.redirect("/") // redirect siempre empieza con / . redirige al usuario a /books
//     res.redirect(`/books/${createdBook._id}/details`) // nos envia directamente a los detalles del libro
//   })
//   .catch((err) => {
//     next(err)
//   })

// })

// // Get "/wines"
// router.get("/", isLoggedIn, async (req, res, next) => {
//   //look for db wines
//   const allWines = await WineModel.find();

//   try {
//     res.render("wines/wines.hbs", { allWines });
//   } catch (err) {
//     next(err);
//   }
// });

// // Get "/wines" show the routes of all wines
// router.get("/:id/details", (req, res, next) => {
//   //look for id db books --- the user sends a request for a book and we get the id so we put box req.params.id
//   const id = req.params.id;
//   console.log(id);

//   // find book by id
//   BookModel.findById(id)
//     .populate("author") // hace target al elemento author dentro del modelo  por seo ponemos re:F en model
//     .then((oneBook) => {
//       // render book --> we need another view to show one book
//       console.log(oneBook);
//       res.render("books/book-details.hbs", { oneBook });
//     })
//     .catch((err) => {
//       next(err);
//     });
// }),
//   // GET "/books/create" --> reenderizar el formulario para crear nuevas entradas
//   router.get("/create", (req, res, next) => {
//     AuthorModel.find()
//       .then((allAuthors) => {
//         //render all books
//         res.render("books/create-form.hbs", { allAuthors });
//       })
//       .catch((err) => {
//         next(err);
//       });
//   }),
//   //POST "/books/create" -- add new book to db
//   router.post("/create", (req, res, next) => {
//     console.log(req.body); //req.body es un comando

//     BookModel.create({
//       title: req.body.title,
//       description: req.body.description,
//       author: req.body.author,
//     })
//       .then((createdBook) => {
//         //en este punto hemos creado el libro
//         //? que queremos hacer con el usuario despues de crear el libro
//         // nuevo método para redirigir al usuario a otra ruta
//         //res.redirect("/") // redirect siempre empieza con / . redirige al usuario a /books
//         res.redirect(`/books/${createdBook._id}/details`); // nos envia directamente a los detalles del libro
//       })
//       .catch((err) => {
//         next(err);
//       });
//   });

// // GET "/book/:id/edit" --- renderizar el formulario para editar

// // router.get("/:id/edit", (req, res, next) => {

// //   const { id } = req.params //decosntruimos
// //   let oneBook;

// //   BookModel.findById(id)
// //   .then((oneBookParam) => {
// //     // render book --> we need another view to show one book now we sent the inf to edit-form. para el pre-llenado de los inputs
// //     oneBook = oneBookParam
// //     // res.render("books/edit-form.hbs", {oneBook})
// //     return AuthorModel.find()
// //   })
// //   .then((allAuthors) => {
// //     // render book --> we need another view to show one book now we sent the inf to edit-form. para el pre-llenado de los inputs
// //     res.render("books/edit-form.hbs", {oneBook, allAuthors})

// //   })
// //   .catch((err) => {
// //     next(err)
// //   })

// // })

// router.get("/:id/edit", async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     // book to edit
//     const oneBook = await BookModel.findById(id);

//     // authors list
//     const allAuthors = await AuthorModel.find();

//     // render edit-form view
//     res.render("books/edit-form.hbs", { oneBook, allAuthors });
//   } catch (err) {
//     next(err);
//   }
// });

// // POST "/books/:id/edit" -- actualizar libro en base de batos i redireccionar al usuario

// router.post("/:id/edit", (req, res, next) => {
//   const { id } = req.params; //decosntruimos por id --- la llamamos en el router.post

//   const { title, description, author } = req.body; //decosntruimos

//   //indByIdAndUpdate needs 2 parameters
//   BookModel.findByIdAndUpdate(id, {
//     title,
//     description,
//     author,
//   })
//     .then((updatedBook) => {
//       res.redirect(`/books/${updatedBook._id}/details`);
//     })
//     .catch((err) => {
//       next(err);
//     });
// }),
//   router.post("/:id/delete", async (req, res, next) => {
//     //Promises con async

//     try {
//       // recibir id
//       const { id } = req.params;

//       //Delete element from db
//       const deletedBook = await BookModel.findByIdAndDelete(id); //delete devuelve el elemento -- remove no.

//       //redireccionar al usuario
//       res.redirect("/books");
//     } catch (err) {
//       next(err);
//     }
//   });

module.exports = router;
