
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

     let query=`INSERT INTO Users VALUES ('${user.userName}', '${user.passwd}' )`

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



/*createUser=(user)=>{
    //feedback.id=uniqid();
    let query=`INSERT INTO Users VALUES ('${user.userName}', '${user.passwd}' )`              )`
    
}*/






saveFeedbackToDb=(feedback)=>{
   
    feedback.id=uniqid();
    let query=`INSERT INTO feedback VALUES ('${feedback.id}', '${feedback.rating}',
                             '${feedback.category}', '${feedback.comment}' )`
    db.run(query);
}


app.get('/getc', (req, res) => {

    let autherName = req.query.autherName;
    let repoName = req.query.repoName;
  
}) 

app.listen(4000, () => {
	
  console.log('Example app listening on port 4000!')
})