const { MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err) {
    return console.log('Unable to connect mongoDB');
  }

  console.log("Connected to mongoDB server");
  // db.collection('Todos').find({
  //   _id: new ObjectID('id')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // })
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  })

  db.collection('Todos').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  });
});
