const express = require('express');
const ProductData = require('./src/model/Productdata');
const UserData = require('./src/model/Userdata');
const cors = require('cors');
var bodyparser = require('body-parser');

var app = new express();
app.use(cors());
app.use(bodyparser.json())

app.get('/products', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    ProductData.find()
                .then(function(products){
                    res.send(products);
                    console.log(products);
                });
});

app.post('/insert', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
        productName : req.body.product.productName,
        productCode : req.body.product.productCode,
        releaseDate : req.body.product.releaseDate,
        description : req.body.product.description,
        price : req.body.product.price,
        starRating : req.body.product.starRating,
        imageUrl : req.body.product.imageUrl,
    }

    var product = new ProductData(product);
    product.save();
});

app.post('/delete', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    id=req.body.pid;
    console.log(id);
    ProductData.deleteOne({_id:id}, function(err, result){
        if(result){
            console.log("Record successfully deleted!");
        }
    });
});

app.post('/signup', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    var user = {
        name : req.body.user.name,
        mailID : req.body.user.mailID,
        phoneNum : req.body.user.phoneNum,
        address : req.body.user.address,
        userName : req.body.user.userName,                                                                                                                        
        password : req.body.user.password,
        imageUrl : req.body.user.imageUrl
    }

    var user = new UserData(user);
    user.save();
});

app.get('/login', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    UserData.find()
                .then(function(login){
                    res.send(login);
                    console.log(login);
                });
});

app.listen(3000, function(){
    console.log('Listening to port 3000');
});