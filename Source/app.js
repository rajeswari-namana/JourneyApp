/**
 * Created by rajin on 7/16/2018.
 */

var express=require('express');
var app=express();
var bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine", "ejs");

var photographs=[
    {name:"India Gate", image:"https://farm8.staticflickr.com/7354/9713630068_16148d2577.jpg"},
    {name:"Taj Mahal", image:"https://farm3.staticflickr.com/2284/2155546710_1f934f8a13.jpg"},
    {name:"Red Fort", image:"https://farm4.staticflickr.com/3453/5736110274_efa015e59b.jpg"}
];

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/photographs", function(req,res){

    res.render("photographs",{photographs:photographs});
});

app.post("/photographs",function (req,res) {
   //get data from form and add to photographs array
    var place=req.body.place;
    var image=req.body.image;
    var newplace={name:place, image:image};
    photographs.push(newplace);
    //redirect back to photographs
    res.redirect("photographs")
});

app.get("/photographs/new",function(req,res){
        res.render("new.ejs")
});

app.listen(3000,function(){
   console.log("The Journey Server has started :)!!");
});