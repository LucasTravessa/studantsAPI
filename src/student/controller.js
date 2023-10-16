const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getStudents = async (req, res) => {
  try {
    const students = await prisma.students.findMany();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getStudentById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const student = await prisma.students.findUnique({ where: { id: id } });
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

const createStudent = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const student = await prisma.students.create({
      data: {
        name: name,
        email: email,
        age: age,
      },
    });

    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const student = await prisma.students.delete({
      where: { id: id },
    });
    res.status(200).send("Student deleted successfully", student);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age } = req.body;

  try {
    const student = prisma.students.update({
      where: { id: id },
      data: {
        name: name,
        email: email,
        age: age,
      },
    });
    res.status(200).send("Student updated successfully", student);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
};
