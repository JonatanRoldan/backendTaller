const { Schema, model } = require("mongoose");

const carroSchema = new Schema(
    {
        marca:{type:String, requirided: true},
        modelo:{type:String, requirided: true},
        color:{type:String, requirided: true},
        placas:{type:String, requirided: true}
    },
    {
        timestamps: true,
		versionKey: false,
    }
);
module.exports = model("carro", carroSchema);