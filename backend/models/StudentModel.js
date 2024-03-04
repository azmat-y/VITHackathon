import mongoose from "mongoose";

const StudentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    registraionNumber: {
      type: Number,
      required: true,
    },
    roomNumber: {
      type: String,
      required: true,
    },
    blockNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model('Student', StudentSchema);