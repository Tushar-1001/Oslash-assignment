import mongoose from "mongoose";

const shortCutSchema = new mongoose.Schema({
    destinationUrl: {type : String, required : true},
    shortCutUrl: {type : String, required : true},
    description: {type : String, required : true},
},{ timestamps: true });

export default mongoose.model("ShortCut", shortCutSchema);