const fs = require('fs');
const emptyData = { courses:[] };

module.exports = {
    getData: function(){
        try {
            const dataRead = fs.readFileSync('./src/data/data.json');
            var parsedData = JSON.parse(dataRead);
            return parsedData;
        } catch(e){
            console.log('getData error');
            console.error(e)
        }
        return emptyData;
    },
    appendCourse: function(newCourse){ // calls existing data, appends to it then overwrites existing data
        try {
            var currentdata = this.getData();
            console.log(newCourse); //
            currentdata.courses.push(newCourse);
            fs.writeFileSync('./src/data/data.json',JSON.stringify(currentdata));
            return true;
        } catch(e){
            console.log('appendCourse error');
            console.error(e)
        }
        return false;
    },
    //jed
    appendPage: function(courseTitle, newPage){ // calls existing data, appends to it then overwrites existing data
        try {
            var currentdata = this.getData();
            var courseData = currentdata.courses.find(x => x.title === courseTitle) || [];
            var pageTitle = { 
                "title": newPage
            };
            console.log(courseData);
            courseData.pages.push(pageTitle);
            fs.writeFileSync('./src/data/data.json',JSON.stringify(currentdata));
            
            return true;
        } catch(e){
            console.log('appendCourse error');
            console.error(e)
        }
        return false;
    }
}