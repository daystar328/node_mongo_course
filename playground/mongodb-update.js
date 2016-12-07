const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObejctID('id num')
  },{
    $set:{
      completeed:true
    },{
      returnOriginal: false
    }
  }).then((result) => {
    console.log(result);
  });

  db.collection('Todos').findOneAndUpdate({
    name: 'David'
  },{
    $set:{
      $inc: {
        age: 1
      }
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
});
