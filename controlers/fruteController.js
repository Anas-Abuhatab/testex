'use strict';

const { default: axios } = require("axios");
const { DataModle } = require("../models/allDataModle");
const { UserModle } = require("../models/schemaModle");


const getAllconteroller =async (req,res) => {

  const  url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
  await  axios.get(url).then((data)=>{
  let allData=data.data.drinks.map(item =>{
    return new DataModle (item);
  });
    res.json(allData)
    });
};

const cerateUserData = async (req,res) =>{
 let bodydata =req.body;
 let newFru = new UserModle(bodydata);
 newFru.save();
 await UserModle.find().then(data =>{
   res.status(200).json(data);
 });
};    

const getUserData = async (req,res) =>{
  UserModle.find().then(data =>{
    res.status(200).json(data);
  });
};

const deleteUserData = async (req,res) =>{
  let fruID =req.params.id;
  UserModle.findByIdAndDelete(fruID).then(()=>{
    UserModle.find().then(data=>{
      res.status(200).json(data);
    });
  });
};

const updateUserData = async (req,res) =>{
  let fruID = req.params.id;
  let updatFru = req.body;
  UserModle.findOne({ _id:fruID }).then(data =>{
    data.strDrink = updatFru.strDrink;
    data.strDrinkThumb =  updatFru.strDrinkThumb;
    data.description = updatFru.description;
    data.idDrink = updatFru.idDrink;
    data.save();
  });
  await UserModle.find().then(data=>{
    res.status(200).json(data);
  });
};


module.exports={
    getAllconteroller,
    getUserData,
    cerateUserData,
    deleteUserData,
    updateUserData
};