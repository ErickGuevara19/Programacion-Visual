"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
function addStudent() {
    let currentStudent = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    };
    students.push(currentStudent);
    console.log(students);
}
;
let teachers = [];
function addTeacher() {
    let currentTeacher = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        title: readFromHtml("title"),
        gradeLevel: readFromHtml("gradeLevel"),
        class: readFromHtml("carrerLevel"),
    };
    teachers.push(currentTeacher);
    console.log(teachers);
}
;
function readFromHtml(id) {
    return document.getElementById(id).value;
}
