const router = require('express').Router();
const db = require('../../models');

router.post('/create', (req, res) => {
    //NOTE: Using NOT NULL
    db.orders.create({
        order_id: req.body.order_id,
        order_date: req.body.order_date,
        order_type: req.body.order_type,
        order_status: req.body.order_status
    }).then(orders => res.json(orders));
})

router.get('/', (req, res) => {
    db.orders.findAll({}).then(orders => res.json(orders));
})

router.get('/:attribute/:value', (req, res) => {
    db.orders.findAll({
        where: {
            [req.params.attribute]:req.params.value
        }
    }).then(orders => res.json(orders));
})

router.put('/:attribute/:value', (req, res) => {
    db.orders.update(req.body, {
        where: {
            [req.params.attribute]:req.params.value
        }
    }).then(orders => res.json(orders));
})

router.delete('/:attribute/:value', (req, res) => {
    db.orders.destroy({
        where: {
            [req.params.attribute]:req.params.value
        }
    }).then(dItem => res.json(dItem));
})

module.exports = router;