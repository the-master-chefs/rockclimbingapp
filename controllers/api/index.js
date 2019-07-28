const router = require("express").Router();
//Sequelize Routes
const customerRoutes = require("./customer");
const stockRoutes = require("./stockRoutes");
const whatOrderedRoutes = require("./whatOrderedRoutes");
const orderHistoryRoutes = require("./orderHistoryRoutes");
const ordersRoutes = require("./ordersRoutes");
const cartRoutes = require("./cartRoutes");
const adminRoutes = require("./completeRoutes");

// Book routes
router.use("/customers", customerRoutes);
router.use("/stock", stockRoutes);
router.use("/wordered", whatOrderedRoutes);
router.use("/orderhistory", orderHistoryRoutes);
router.use("/orders", ordersRoutes);
router.use("/cart", cartRoutes);
router.use("/adminRoutes", adminRoutes);
module.exports = router;
