const express = require("express");
const router = express.Router();

const cityModel = require("../../models/city");
//in this way we can create different routes for the same page
router.get("/test", (req, res) => {
  res.send("Cities test route");
});
router.get("/", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});
router.get('/:name',
	(req, res) => {
  		let cityRequested = req.params.name;
  		cityModel.findOne({ name: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  let addCity = new cityModel({
    name: req.body.name,
    country: req.body.country
  });
  console.log(addCity);
  addCity.save((err, files) => {
    if (err) {
      console.log(err);
    }
    res.status(201).json(files);
  });
});

module.exports = router;
