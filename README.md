# LMS_RestFull_APIs
Implementation of a miniature Learning Management System (LMS) in the form of a RESTful API and provide HTML forms for create only.
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
# POST Request Constrains:
* Courses:
Course entity will have the following properties:<br />
name: string, required, min length of 5 characters.<br />
code: string, required, must match 3 letters followed by 3 numbers.<br />
id: integer, auto generated.<br />
description: string, optional, max length of 200 characters.<br />
