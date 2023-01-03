// ignore this file for now

/* 
$(() => {
    console.log('loaded');
});

function getCourses(){
    fetch(window.origin+'/courses') // http://localhost3000
    .then((res)=>{
        return res.text();
    })
    .then((data)=>{
        $('#course-container').html(data); //not currently using Handlebars I think
    })
}

// In it's current state createCourse() only takes the current Date string as the title parameter. This should be changed to allow input from the user as the title.
function addCourse(){
    fetch(window.origin+'/courses?title='+new Date().toTimeString(),
    {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        }
    })
    .then((res)=>{
        console.log(res);
        return res.text();
    })
    .then((data)=>{
        getCourses();
    })
}

// Jed
function addPage(){
    var title = document.getElementById("title").innerHTML;
    var pageTitle = document.getElementById("pageTitle").value; //
    fetch(window.origin+'/courses?title=' + title + '&pageTitle=' + pageTitle,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        }
    })
    .then((res)=>{
        console.log(res);
        return res.text();
    })
    .then((data)=>{
        getCourses();
    })
} */