const mongoose = requires("express");

const inventorySchema = new mongoose.Schema({
  inventoryType: {
    type: String,
    required: [true, "inventroty Type Requied"],
    enum: ["in", "out"],
  },
  bloodGroup: {
    type: String,
    required: [true, "Blood Group is Required"],
    enum: ["O+,", "O-", "AB+", "AB-", "A-", "A+", "B+", "B-"],
  },
  quantity: {
    type: Number,
    required: [true, "Blood group Required"],
  },
  organization: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "users",
    required: [true, "organization is require"],
  },
  hospital: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "users",
    required: function () {
        return this.inventoryType ==='out'
    },
  },
  doner:{
    type:mongoose.Schema.Type.ObjectId,
    ref:"users",
    required:function(){
        return this.inventoryType === 'in'
    },
  },
},
{timestamps:true}
);

module.exports = mongoose.model("Inventory", inventorySchema);
