const booksController = require("../../controllers/booksController");
const router = require("express").Router();


// Matches with "/api/books"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

router.route("/:id")
.delete(booksController.delete);

module.exports = router;