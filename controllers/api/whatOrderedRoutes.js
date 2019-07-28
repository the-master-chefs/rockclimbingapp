const router = require('express').Router();
const db = require('../../models');

router.post('/create', (req, res) => {
    db.what_ordered.create({
        order_id: req.body.order_id,
        fulfillment_date: req.body.fulfillment_date,
        meal_id: req.body.meal_id,
        quantity: req.body.quantity,
        price: req.body.quantity,
        order_date: req.body.order_date
    }).then(ordered => {
        console.log(ordered);
        return res.json(ordered);
    })
});

router.get('/', (req, res) => {
    db.what_ordered.findAll({}).then(ordered => res.json(ordered));
});

router.get('/:attribute/:value', (req, res) => {
    db.what_ordered.findAll({
        where: {
            [req.params.attribute]:req.params.value
        }
    }).then(item => res.json(item));
});

router.put('/:attribute/:value', (req, res) => {
    db.what_ordered.update(req.body, {
        where: {
            [req.params.attribute]:req.params.value
        }
    }).then(uItem => res.json(uItem));
})

router.delete('/:attribute/:value', (req, res) => {
    db.what_ordered.destroy({
        where: {
            [req.params.attribute]:req.params.value
        }
    }).then(dItem => res.json(dItem))
})

module.exports = router;