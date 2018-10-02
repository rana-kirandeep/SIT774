
const express = require('express')
const uniqid = require('uniqid');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./src/db1/mydataBase',(err)=>console.log(err));

//const ResponseCreator = require('./src/response/resCreator.js');
//const ClassifierEngin = require('./src/classifierEngin/classifierEngin.js');

const app = express()

app.use(express.static('static'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/',(req,res)=>{
    res.send("hello worl");
})

app.get('/form', (req, res) => {
    console.log("inside form");
    res.sendFile(__dirname + "/static/index.html");
})


app.post('/contactUs',(req,res)=>{

    contactUs={...req.body}
    res.send(contactUs);

})

app.post('/login',(req,res)=>{
    credentials={...req.body}
    const query=`select * from Users where userName='${credentials.userName}' and password='${credentials.passwd}'`
    db.all(query,(err, row)=>{
       console.log(err)
        res.send({login:row.length>0});
    })
   
})


app.post('/createUser',(req,res)=>{
     
     user={...req.body}
     user.id=uniqid();

     let query=`INSERT INTO Users VALUES ('${user.id}','${user.userName}', '${user.passwd}' )`

     db.run(query);


    res.send({creatUser:true});

})


app.post('/feedback', (req, res) => {
    feedback={...req.body}
    saveFeedbackToDb(feedback);
    db.all("select * from feedback",(err, row)=>{
       res.send(row)
    })
    
})

app.get('/feedback',(req, res)=>{
    db.all("select * from feedback",(err, row)=>{
       res.send(row)
    })
})


saveFeedbackToDb=(feedback)=>{
   
    feedback.id=uniqid();
    let query=`INSERT INTO feedback VALUES ('${feedback.id}', '${feedback.rating}',
                             '${feedback.category}', '${feedback.comment}' )`
    db.run(query);
}

app.post('/delete/:id',(req,res)=>{

     userObj={...req.params}
     console.log(userObj)
     let query=`DELETE FROM Users where id='${req.params.id}'`
     db.run(query)
     console.log(query)
     //debugger
     res.redirect('/delete')

})


app.get('/delete',(req,res)=>{


const query=`select * from Users`
    db.all(query,(err, row)=>{
       user=row[0]

let htmlStr=`<!DOCTYPE html>
<html>
<head>
    <title>Delete Website User</title>
</head>
<style type="text/css">
    div{
       
        font-size: 1.5rem;
        margin: auto 20%;
    }
    table{
        border: 2px solid white;
        text-align:center;

    }
    th{
    background-color: green
    }
    td{
    background-color: #7ac142
    }

</style>
<script type="text/javascript">

function submitData(){
    
    let radios=document.getElementsByName("row");
    for (i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
          
           formElement=document.getElementById('myform')
           formElement.action = "http://localhost:4000/delete/"+radios[i].value;
            
          formElement.submit();

        }
    }
}

    
</script>

<body>
    <form id="myform" method="post" ation="http://localhost:4000/delete">
    <input type="text" name="id" value="" hidden="true">
    </form>
<div >
    The User table information
    <table>
        <tr>
        <th> </th>
        <th>ID </th>
        <th>User Name</th>
        <th>Password </th>          
        </tr>`

        let tableRow=""
        row.forEach((user)=>{
            tableRow+=`<tr>
            <td><input type="radio" name="row" value=${user.id}></td>
            <td>${user.id}</td>
            <td>${user.userName}</td>
            <td>${user.password}</td>
        </tr>`
        })


        htmlStr=htmlStr+tableRow+       

    `</table>
    <button onClick=submitData()>delete</button>

</div>


</body>
</html>`;






        res.send(htmlStr);
    })






})



app.get('/getc', (req, res) => {

    let autherName = req.query.autherName;
    let repoName = req.query.repoName;
  
}) 

app.listen(4000, () => {
	
  console.log('Example app listening on port 4000!')
})