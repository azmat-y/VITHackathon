import mongoose from "mongoose";

const GuardSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required : true
        },
        EmpId: {
            type : String,
            required : true
        },
    },
    {
        timestamps:true,
    }
);