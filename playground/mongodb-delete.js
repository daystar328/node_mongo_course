// const MongoClient  = require('mongodb').MongoClient;
const {MongoClient, ObjectID}  = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log('unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB server');
  // deleteMany
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });

  //deleteOne
  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });
//findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });

  db.collection('User').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id:new ObjectID("id number")}).then((result) => {
    console.log(JSON.stringufy(result, undefined, 2));
  });

  db.collection('User').findOneAndDelete({name: 'Mike'}).then((result) => {
    console.log(result);
  });


});
