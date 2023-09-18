const express = require('express');
const studentsRoutes = require('./src/student/routes');

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello World");
})

app.use('/api/v1/students', studentsRoutes);

app.listen(port, ()=> console.log(`App listing on port ${port}`))