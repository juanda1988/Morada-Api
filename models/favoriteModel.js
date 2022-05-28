const moongoose = require("mongoose");
const { Schema } = moongoose;

const FavoriteSchema = new Schema({
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'properties'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
}, {
    timestamps: true
});

const Favorite = moongoose.model('favorites', FavoriteSchema);
module.exports = Favorite;