const Joi = require('joi');     //using joi version joi@13.1.0
const express = require('express'); 
const { indexOf } = require('methods');
const app = express();
app.use(express.json());

const courses = [
    {
        id: 1,
        name: 'Neural Network',
        code: 'CSE150', 
        description: 'Neural Network is a subset of machine learning courses'
    },
    {
        id: 2,
        name: 'English',
        code: 'CSE270',
        description: 'English course is produced by ain shams university'
    }
];

const students = [
    {
        id: 1,
        name: 'Gerges Wegeh',
        code: '1600447',
    },
    {
        id: 2,
        name: 'Mohamed Ali',
        code: '1608770',
    },
];
//Get Request *******************************************
app.get('/', (req, res) => {
    res.send("Welcome to LMS Apis. ....................Courses path is '/api/courses'. ....................Students path is '/api/students'");
})

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/students', (req, res) => {
    res.send(students);
});
//Get single course or student
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(({id}) => {
        return id === parseInt(req.params.id);
    });
    if(!course){
        res.status(404).send('course with this given id was not found.');
        return;
    }
    res.send(course);
});

app.get('/api/students/:id', (req, res) => {
    const student = students.find(({id}) => {
        return id === parseInt(req.params.id);
    });
    if(!student){
        res.status(404).send('student with the given id was not found.');
        return;
    }
    res.send(student);
})
//End Get Requests *******************************************
//Post Requests **********************************************
app.post('/api/courses', (req, res) => {
    const {error} = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name,
        code: req.body.code,
        description: req.body.description
    }
    courses.push(course);
    res.send(course);
});

app.post('/api/students', (req, res) => {
    const { error } = validateStudent(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const student = {
        id: students.length + 1,
        name: req.body.name,
        code: req.body.code,
    }
    students.push(student);
    res.send(student);
});
//End Post Requests ******************************************
//Put Requests ***********************************************
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(({id}) => {
        return id === parseInt(req.params.id);
    })
    if(!course){
        res.status(404).send('Course with the given id was not found.');
        return;   
    }

    const { error } = validateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    course.code = req.body.code;
    course.description = req.body.description;
    res.send(course);
})

app.put('/api/students/:id', (req, res) => {
    const student = students.find(({id}) => {
        return id === parseInt(req.params.id);
    });
    if(!student){
        res.status(404).send('Student with the given id was not found.');
        return;
    }
    
    const { error } = validateStudent(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    student.name = req.body.name;
    student.code = req.body.code;
    res.send(student);
});
//End Put Requests *******************************************
//Delete Requests ********************************************
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(({id}) => {
        return id === parseInt(req.params.id);
    })
    if(!course){
        res.status(404).send('Course with the given id was not found.');
        return;
    }

    const deltedIndex = courses.indexOf(course);
    courses.splice(deltedIndex, 1);

    res.send(course);
})

app.delete('/api/students/:id', (req, res) => {
    const student = students.find(({id}) => {
        return id === parseInt(req.params.id);
    });
    if(!student){
        res.status(404).send('Student with the given id was not found.');
        return;
    }

    const deltedIndex = students.indexOf(student);
    students.splice(deltedIndex, 1);

    res.send(student);
})
//End Delete Requests ****************************************
const validateCourse = (course) => {
    const schema = {
        name: Joi.string().min(5).required(),
        code: Joi.string().min(6).max(6).required(),
        description: Joi.string().max(200)
    }
    return Joi.validate(course, schema);
}

const validateStudent = (student) => {
    const schema = {
        name: Joi.string().required(),
        code: Joi.string().min(7).max(7).required()
    }
    return Joi.validate(student, schema);
}
const port =process.env.PORT || 3000;
app.listen(port, () => console.log(`Listeneing on port ${port}......`));
