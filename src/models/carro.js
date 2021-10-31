const { Schema, model } = require("mongoose");

const carroSchema = new Schema(
    {
        marca:{type: Schema.ObjectId, ref: "marca", requerided:true},
        categoria:{type: Schema.ObjectId, ref: "categoria", requerided:true},
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