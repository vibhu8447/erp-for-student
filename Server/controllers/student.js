import student from "../models/student.js";
export const getStudents = async (req, res) => {
  try {
    const allStudents = await student.find();
    res.status(200).json(allStudents);
  } catch (error) {
    // console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};
export const createStudent = async (req, res) => {
  const student = res.body;

  const newStudent = new student(student);

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
