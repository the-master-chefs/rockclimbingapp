const router = require("express").Router();
const db = require("../../models");

router.post("/create", (req, res) => {
  //NOTE: Only using NOT NULL columns
  db.order_history.create({
    order_id: req.body.order_id,
    meal_id: req.body.meal_id,
    quantity: req.body.quantity,
    price: req.body.price,
    order_date: req.body.order_date 
  }).then(hist => {
    console.log(hist);
    return res.json(hist);
  });
});

router.get("/", (req, res) => {
  db.order_history.findAll({}).then(hist => res.json(hist));
});

router.get("/:attribute/:value", (req, res) => {
  db.order_history.findAll({
    where: {
      [req.params.attribute]:req.params.value
    }
  }).then(item => res.json(item));
});

router.put("/:attribute/:value", (req, res) => {
  db.order_history.update(req.body, {
    where: {
      [req.params.attribute]:req.params.value
    }
  }).then(uItem => res.json(uItem));
});

router.delete("/:attribute/:value", (req, res) => {
  db.order_history.destroy({
    where: {
      [req.params.attribute]:req.params.value
    }
  }).then(dItem => res.json(dItem));
});

module.exports = router;