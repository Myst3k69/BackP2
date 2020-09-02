//database connection

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://p2:p2mdpb@cluster0.vf2je.mongodb.net/shakeit?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true ,  useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Connected to the database")
  
  client.close();
})

module.exports = connectDb;