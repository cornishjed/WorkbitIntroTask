const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars').engine
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs');

const app = express();

const dataHandler = require('./src/dataHandler');
const { title } = require('process');

app.engine('.hbs', expressHandlebars({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')

var templateData = {};

const courseTemplate = fs.readFile('./src/templates/course.hbs', (e, data) => {
    if(e){ console.error(e);}
    templateData.course = Handlebars.compile(data.toString('utf-8'));
})
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, 'public'))); //enables use of css files and other static files

app.get('/courses', (req, res)=>{
    var courses = readCourses();
    return res.end(courses);
});

app.get('/courses', (req, res, next)=>{
    var courses = readCourses();
    //console.log(courses); //
    return res.end(courses);
});

// when post action invoked on courses route ...
app.post('/courses', (req, res, next) => {
    createCourse(res.query.title);
    createPage(res.query.title, req.query.pageTitle);
    console.log("here"); //
    console.log(req.query.title) //
    res.sendStatus(200);
})


const port = process.env.PORT || 3000;

 
app.listen(port, () => console.log(`Listening on port ${port}`));






// function to write data to templateData
/* const courseTemplate = fs.readFile('./views/templates/course.hbs', (e, data) => {
    if(e){ console.error(e);}
    templateData.course = expressHandlebars.compile(data.toString('utf-8'));
}) */

function readCourses(){
    const data = dataHandler.getData(); // JSON returned
    var courseMarkup = "";
    for(var i=0;i<data.courses.length;i++){
        courseMarkup += templateData.course(data.courses[i]); // Converts to HTML
    }
    return courseMarkup;
}
 
// This function is currently not in use, so if implemented it could offer the functionality of adding new course with a name.
function createCourse(title){
    var newCourse = {
        "_id":"course"+Math.random(),
        "title": title
    }
    console.log(title);
    dataHandler.appendCourse(newCourse);
}

// jed
function createPage(courseTitle, pageTitle){
    //var courseTitle = "Pets Course";
    //console.log(courseTitle);
    //pageTitle = "sample";
    dataHandler.appendPage(courseTitle, pageTitle);
}