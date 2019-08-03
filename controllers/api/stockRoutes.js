const router = require("express").Router();
const db = require("../../models");

router.post("/create", (req, res) => {
  db.Stock.create({
    fulfillment_date: req.body.fulfillment_date,
    price: req.body.price,
    title1: req.body.title1,
    //TODO: Add other titles and lines
    imageURL: req.body.imageURL
  }).then(newItem => {
    console.log(newItem);
    return res.json(newItem);
  });
});

router.get("/", (req, res) => {
  db.Stock.findAll({}).then(inventory => res.json(inventory));
});

router.get("/:attribute/:value", (req, res) => {
  db.Stock.findAll({
    where: {
      [req.params.attribute]:req.params.value
    }
  }).then(item => res.json(item));
});

router.put("/:attribute/:value", (req, res) => {
  db.Stock.update(req.body, {
    where: {
      [req.params.attribute]:req.params.value
    }
  }).then(uItem => res.json(uItem));
});

router.delete("/:attribute/:value", (req, res) => {
  db.Stock.destroy({
    where: {
      [req.params.attribute]:req.params.value
    }
  }).then(dItem => res.json(dItem));
});

module.exports = router;