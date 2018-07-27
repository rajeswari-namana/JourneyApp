/**
 * Created by rajin on 7/16/2018.
 */

var express=require('express'),
    app=express(),
    bodyparser=require("body-parser"),
    mongoose=require("mongoose"),
    mongodb=require("mongodb");

mongoose.connect('mongodb://localhost:27017/Journey_DB', { useNewUrlParser: true });

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine", "ejs");

// Schema Setup

var placeSchema= new mongoose.Schema({
   name:String,
   image:String
});

var Photograph=mongoose.model("Place",placeSchema);


app.get("/", function(req,res){
   res.render("landing");
});

app.get("/photographs", function(req,res){
    //get all places from db
    Photograph.find({},function (err,allPlaces) {
        if(err){
            console.log(err)
        }
        else {
            res.render("photographs",{photographs:allPlaces});
        }
    })

});

app.post("/photographs",function (req,res) {
    //get data from form and add to photographs array
    var place = req.body.place;
    var image = req.body.image;
    var newplace = {name: place, image: image};
    // create a new place and save it to database
    Photograph.create(newplace,function (err,newlyCreated) {
        if(err){
            console.log(err)
        }
        else{
            //redirect back to photographs
            res.redirect("photographs")
        }
    })
});

   


app.get("/photographs/new",function(req,res){
        res.render("new.ejs")
});

app.listen(3000,function(){
   console.log("The Journey Server has started :)!!");
});