const router = require("express").Router();
const db = require("../../models");



router.post("/testRoute", (req, res) => {
    console.log("this hit");
    // db.sequelize.query("INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date, createdAt, updatedAt) SELECT unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date, CURDATE(), CURDATE() FROM what_ordered WHERE fulfillment_date = CURDATE();").then(([results, metadata]) => { db.sequelize.query("DELETE FROM what_ordered where fulfillment_date = CURDATE();").then(([results, metadata]) => { res.json({Message: "your request was successful"})  });  });
    
    // Testing purposes
    db.sequelize.query("INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date, createdAt, updatedAt) SELECT unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date, CURDATE(), CURDATE() FROM what_ordered WHERE fulfillment_date = (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY));").then(([results, metadata]) => { db.sequelize.query("DELETE FROM what_ordered where fulfillment_date = (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY));").then(([results, metadata]) => { res.json({Message: "your request was successful"})  });  });


});

module.exports = router;



// db.shopping_cart.findAll({
//     where: {
//       [req.params.attribute]:req.params.value
//     }
//   }).then(cart => res.json(cart));

// if not monday, need an if/then to make sure they are aware nothing is being processed.