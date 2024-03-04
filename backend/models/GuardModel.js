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

export const Guard = mongoose.model('Guard', GuardSchema);