import mongoose from "mongoose";

const studentsSchema = mongoose.Schema({
  registerationNumber: Number,
  name: String,
  grade: String,
  section: {
    type: String,
    default: "A",
  },
  subjects: [String],
});
const student = mongoose.model("student", studentsSchema);
export default student;
