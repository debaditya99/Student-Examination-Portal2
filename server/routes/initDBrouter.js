const express = require('express');
const router = express.Router();
const app = express();
const Student = require('../models/studentModel');
const Program = require('../models/programModel');
const Course = require('../models/courseModel');
const AnswerSheet = require('../models/answerSheetModel');
const Marks = require('../models/marksModel');

//to get the user by ID on get request, to fill up the order (FK) table as nested
router.get('/', async (req, res) => {
    const user = await Student.findById('64784204143c86a88a51dc1e').populate('program')
    res.json(user);
});

//POST request to add data to DB
router.post('/', (req, res) => {
    const studentREF = req.body.studentREF;
    const name = req.body.name;

    // const program = new Program({
    //     programID: "020",
    //     name: "Bachelors of Computer Applications",
    //     shortname: 'BCA',
    // })

    // const student = new Student({
    //     // studentID: '01035304421',
    //     // name: 'Debaditya Mandal',
    //     studentID: '01235304421',
    //     name: 'Sahil Jha',
    // })
    // student.programREF = program
    // student.programREF = '6478d3cd4f3b4ec73356d949'

    const course = new Course({
        courseID: "102",
        name: "Data and File Structures",
        shortname: 'DFS',
        semester: 2,
    })
    // course.programREF = program
    course.programREF = '6478d3cd4f3b4ec73356d949'

    const answersheet = new AnswerSheet({
        answerSheetID: '044102',
        
    })
    // answersheet.studentREF =  student
    // answersheet.programREF = program
    answersheet.courseREF = course
    answersheet.studentREF =  '6478d3cd4f3b4ec73356d94a'
    answersheet.programREF = '6478d3cd4f3b4ec73356d949'
    // answersheet.courseREF = '6478d3cd4f3b4ec73356d94b'

    const marks = new Marks({
        allocMarks: 17,
        totalMarks: 25,
    })
    marks.answerSheetREF =  answersheet

    // student.save();
    // program.save();
    course.save();
    answersheet.save();
    marks.save();
    res.send('Data has been added');
});

//647644962d7d5ae173dbda26
module.exports = router;