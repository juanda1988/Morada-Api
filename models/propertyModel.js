const moongoose = require("mongoose");
const { Schema } = moongoose;


const PropertySchema = new Schema({
    tittle: String,
    city: Number,
    zone: Number,
    propertyType: Number,
    businessType: Number,
    mainImage: String,
    images: [String],
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    value: Number,
    shortDescription: String,
    description: String,
    status: Number
}, {
    timestamps: true
});

const Property = moongoose.model('properties', PropertySchema);
module.exports = Property;