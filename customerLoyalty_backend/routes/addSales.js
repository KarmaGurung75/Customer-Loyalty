const express = require("express");
const addSale = require("../models/addSales");
const auth = require("../middleware/auth");
const router = express.Router();

// Set default API response
router
  .route("/addingSales")
  .get((req, res, next) => {
    addSale
      .find()
      .then((addSales) => {
        res.json(addSales);
      })
      .catch((err) => next(err));
  })
  .post(auth.verifyUser, (req, res, next) => {
    addSale
      .create(req.body)
      .then((addSales) => {
        res.json(addSales);
      })
      .catch(next);
  });

router.route("/:id").get((req, res, next) => {
  addSale
    .findById(req.params.id)
    .then((addSales) => {
      res.json(addSales);
    })
    .catch(next);
});

router.route("/:salesStatus/search").get((req, res, next) => {
  addSale
    .find({ salesStatus: req.params.salesStatus })

    .then(
      (addSales) => {
        if (addSales != null) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(addSales);
        } else {
          err = new Error("Route " + req.params.salesStatus + " not found");
          err.status = 404;
          return next(err);
        }
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

router.delete("/deleteSales/:id", function (req, res, next) {
  //console.log(req.params.id);
  addSale
    .findByIdAndDelete(req.params.id)
    .then(
      (reply) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(reply);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = router;
