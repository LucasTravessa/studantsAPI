const pool = require('../../db')
const querires = require('./queries')

const getStudents = (req, res) => {
    pool.query(querires.getStudents, (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(querires.getStudentById, [id], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
} 

const createStudent = (req, res) => {
    const { name, email, age, dob } = req.body

    //check if email exists
    pool.query(querires.checkEmailExists, [email], (error, results) => {
        if(results.rows.length) {
            res.status(409).send('Email already exists')
        }

        //add student to db
        pool.query(querires.createStudent, [name, email, age, dob], (error, results) => {
            if(error) {
                throw error
            }
            res.status(201).send('Student created successfully')
        })
    })

}

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(querires.getStudentById, [id], (error, results) => {
        const noStudentsFound = !results.rows.length;
        if (noStudentsFound){
            res.status(404).send("Student does not exist in the db")
        }

        pool.query(querires.deleteStudent, [id], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send("Student deleted successfully")
            
        })
        
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, age, dob } = req.body

    pool.query(querires.getStudentById, [id], (error, results) => {
        const noStudentsFound = !results.rows.length;
        if (noStudentsFound){
            res.status(404).send("Student does not exist in the db")
        }

        pool.query(querires.updateStudent, [name, email, age, dob, id], (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send("Student updated successfully")
            
        })
        
    })
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    deleteStudent,
    updateStudent
}