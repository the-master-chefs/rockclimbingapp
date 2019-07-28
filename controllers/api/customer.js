//Import Dependencies
const router = require("express").Router();
const db = require("../../models");

// Routes
//GET for all customers
router.get("/", (request, response) => {
  db.Customer.findAll({}).then(customers => response.json(customers));
});

//GET Route for specific customer
router.get("/:attribute/:value", (request, response) => {
  //Note that attribute can be firstname, lastname, phonenumber, etc.
  db.Customer.findAll({
    where: {
      [request.params.attribute]: request.params.value
    }
  }).then(customer => response.json(customer));
});

// POST/Create a customer
router.post("/create", (request, response) => {
  db.Customer.create({
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    phonenumber: request.body.phonenumber,
    email: request.body.email,
    password: request.body.password,
    address1: request.body.address1,
    address2: request.body.address2,
    address3: request.body.address3,
    city: request.body.city,
    state: request.body.state,
    zip: request.body.zip
  }).then(newCustomer => {
    console.log(newCustomer);
    response.json(newCustomer);
  });
});

// PUT/Update
router.put("/:attribute/:value", (request, response) => {
  //Here we update a specific customer
  db.Customer.update(request.body, {
    where: {
      [request.params.attribute]: request.params.value
    }
  }).then(updatedCustomer => response.json(updatedCustomer));
});

// DELETE/Delete
router.delete("/:attribute/:value", (request, response) => {
  db.Customer.destroy({
    where: {
      [request.params.attribute]: request.params.value
    }
  }).then(destroyedCustomer => response.json(destroyedCustomer));
});

module.exports = router;