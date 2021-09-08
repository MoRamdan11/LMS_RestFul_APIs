# LMS_RestFull_APIs
Implementation of a miniature Learning Management System (LMS) in the form of a RESTful API.
The system will have two entities: Course and Student. LMS_APIs will provide you a full CRUD operations (Create, read, update and delete).
<br />This Project is deployed on HEROKU.

# HEROKU URL
https://lms-restful-apis.herokuapp.com/<br/>
* Courses Path:<br/>
&nbsp;&nbsp;&nbsp;https://lms-restful-apis.herokuapp.com/api/courses<br />
* Students Path:<br />
&nbsp;&nbsp;&nbsp;https://lms-restful-apis.herokuapp.com/api/students<br />


## Tools used:
* Node.js
* JavaScript
* HEROKU
* Postman

## Test APIs
You can use Postman to test All Requests (GET, POST, PUT, DELETE) using Paths in Code<br/>
### POST Request Constrains:
* Courses:<br/>
Course entity will have the following properties:<br />
1- name: string, required, min length of 5 characters.<br />
2- code: string, required, must match 3 letters followed by 3 numbers.<br />
3- id: integer, auto generated.<br />
4- description: string, optional, max length of 200 characters.<br />
* Students: <br/>
Student entity will have the following properties:<br/>
1- name: string, required, only letters in both cases, apostrophe and dashes are allowed.<br/>
2- code: string, required, must match 7 characters.<br/>
3- id: integer, auto generated.<br/>
