'use strict';


const express = require('express');

const Datastore = require('@google-cloud/datastore');


const app = express();

// Your Google Cloud Platform project ID
const projectId = 'nauticus-playground';
 

app.get('/cases', function(req, res) { 

  const datastore = new Datastore({
    projectId: 'nauticus-playground',
    namespace:'verify',
    //cases: "cases"
  
  });
  const query = datastore.createQuery('cases');
  query.limit(20);
  datastore.runQuery(query, function(err, entities) {
    // entities = An array of records.
  
    // Access the Key object for an entity.
    // const firstEntityKey = entities[0][datastore.KEY];
    
    res.send(entities)
  });


})


  var request = require('request');


var options = { 
  method: 'POST',
  url: 'https://rest.nauticus.exchange/call/GetUserInfo',
  
  headers: { 
    "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwa2ciOiJ2ZXJpZnkiLCJpYXQiOjE1MzY2NTM4NTksImF1ZCI6Im5hdXRpY3VzIn0.d3QdaJxUJtVTzBoNcVvt79HCrUhvymCWGBihwkje44M',
    'Content-Type': 'application/json' 
  },
   body: { payload: { UserId: 25, OMSId: 1 } },
   json:true
  };
  // request(options, callback);
  
request(options, function(error, res, body){
  console.log(body);
});
  
// app.get('/userinfo', function (req, res) {
//   res.send('random.text')
// })



app.get('/detail', function(req, res) { 

  const datastore = new Datastore({
    projectId: 'nauticus-playground',
    namespace:'test',
    //cases: "cases"
  
  });
  const key = datastore.key(['angie', '321']);
  const data = {
    name: '321',
    ts: new Date()
    
    
  };
  
  datastore.save({
    key: key,
    data: data,
    
  }, function(err) {
    if (!err) {
      //res.send('"Success": true'),
     
      res.send(data)
    }
  });

});


app.listen(8080);