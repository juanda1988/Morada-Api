const moongoose = require("mongoose");
const { Schema } = moongoose;

const RequestSchema = new Schema({
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: 'properties'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    comment: String
}, {
    timestamps: true
});

const Request = moongoose.model('requests', RequestSchema);
module.exports = Request;