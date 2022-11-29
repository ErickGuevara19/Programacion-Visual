import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";

let students: Student[] = [];

function addStudent():void{

    let currentStudent : Student = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    }
    students.push(currentStudent);
    console.log(students);
};
let teachers: Teacher[] = [];

function addTeacher(){

    let currentTeacher : Teacher = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        title: readFromHtml("title"),
        gradeLevel: readFromHtml("gradeLevel"),
        class: readFromHtml("carrerLevel"),
    }
    teachers.push(currentTeacher);
    console.log(teachers);
};

function readFromHtml(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;

}