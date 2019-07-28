var db = require("../models");


// need to drop an if/then statement to pull the correct dates. if the current date is greater than or equal to the minimum day fulfillment_date, run curDate, if not, run next monday?
db.sequelize.query("INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date, createdAt, updatedAt) SELECT unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date, CURDATE(), CURDATE() FROM what_ordered WHERE fulfillment_date = CURDATE();").then(([results, metadata]) => { db.sequelize.query("DELETE FROM what_ordered where fulfillment_date = CURDATE();").then(([results, metadata]) => {   });  });
