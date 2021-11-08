const { Schema, model } = require("mongoose");

const tareaSchema = new Schema(
    {
        nombre:{type:String, requirided: true},
        descripcion:{type:String, requirided: true},
        costo:{type:Number, requirided: true},
        timpoE:{type:String, requirided: true}
    },
    {
        timestamps: true,
		versionKey: false,
    }
);
module.exports = model("tarea", tareaSchema);