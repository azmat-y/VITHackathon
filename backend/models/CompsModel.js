import mongoose from "mongoose";

const CompsSchema = mongoose.Schema(
    {
        compType: {
            type: String,
            required : true
        },
        comp: {
            type : String,
            required : true
        },
        studCheck: {
            type : Boolean,
            required : true
        },
        guardCheck: {
            type : Boolean,
            requred :true
        }
    },
    {
        timestamps:true,
    }
);

export const Comps = mongoose.model('Comps', CompsSchema);