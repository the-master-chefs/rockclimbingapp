const router = require("express").Router();
const db = require("../../models");

router.post("/create", (req, res) => {
  //NOTE: Using NOT NULL
  db.shopping_cart.create({
    order_id: req.body.order_id,
    quantity: req.body.quantity,
    price: req.body.price
  }).then(cart => res.json(cart));
});
router.get("/", (req, res) => {
  db.shopping_cart.findAll({}).then(cart => res.json(cart));
});

router.get("/:attribute/:value", (req, res) => {
  db.shopping_cart.findAll({
    where: {
      [req.params.attribute]:req.params.value
    }
  }).then(cart => res.json(cart));
});

router.put("/:attribute/:value", (req, res) => {
  db.shopping_cart.update(req.body, {
    where: {
      [req.params.attribute]:req.params.value
    }
  }).then(cart => res.json(cart));
});

router.delete("/:attribute/:value", (req, res) => {
  db.shopping_cart.destroy({
    where: {
      [req.params.attribute]:req.params.value
    }
  }).then(dItem => res.json(dItem));
});

module.exports = router;