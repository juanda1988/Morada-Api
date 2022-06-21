require("../connection/mongoconn");
const mongoose = require("mongoose");
const FavoriteModel = require("./../models/favoriteModel");
const {ObjectId} = mongoose.Types;

const main = async (id) => {
  try {
    const favoritesByUser = await FavoriteModel.aggregate([
      {
        $match: {
          userId: ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "properties",
          localField: "propertyId", // favorites
          foreignField: "_id", // property
          as: "property",
        },
      },
      {
        $unwind: "$property",
      },
      {
        $project: {
          property: "$property",
        },
      },
    ]);
    console.log("favoritesByUser", favoritesByUser);
  } catch (error) {
    console.log("error", error);
  }
};

main("62a4c66715572dfc87a9d098");
//629b7b9d333a671a7d31b6e8
//629b7c40333a671a7d31b6ea

/*
db.favorites.insertOne(
    { 
        propertyId: ObjectId("629b7b9d333a671a7d31b6e8"), 
        userId: ObjectId("62a4c66715572dfc87a9d098")
    }
);
*/