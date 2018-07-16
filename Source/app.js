/**
 * Created by rajin on 7/16/2018.
 */

var express=require('express');
var app=express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/photographs", function(req,res){
    var photographs=[
        {name:"India Gate", image:"https://pixabay.com/get/ea30b3092af3063ed1584d05fb1d4e97e07ee3d21cac104496f1c67aa2ebb1b9_340.jpg"},
        {name:"Taj Mahal", image:"https://pixabay.com/get/e835b20f20fd053ed1584d05fb1d4e97e07ee3d21cac104496f1c67aa2e4b4b8_340.jpg"},
        {name:"Red Fort", image:"https://pixabay.com/get/eb37b40b2ff4053ed1584d05fb1d4e97e07ee3d21cac104496f1c67aa1edb6b9_340.jpg"}
    ];
    res.render("photographs",{photographs:photographs});
});


app.listen(3000,function(){
   console.log("The Journey Server has started :)!!");
});