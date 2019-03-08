const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req, res) => res.send({'data':'HELLO FROM EXPRESS'}));
// app.get('/api/cities', (req, res) => res.send({'data':'CITIES'}));

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me ${req.body.post}`,
    );
});

var router = express.Router();
// var router2 = express.Router();

router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});

router.get('/home', (req, res) => {
    res.send({'data':'home page'});
})
router.get('/cities', (req, res) => {
    res.send({'data':'cities page'});
})
app.use('/api', router);

app.listen(port, () =>
    console.log('Server is running on ' + port + 'port')
    // console.log(router.stack[1].route)
);