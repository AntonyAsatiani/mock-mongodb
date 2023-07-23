const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/mongoparallel?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const connectToDatabase = async () => {
  try {
    console.log('Connecting to database');
    await client.connect();
    console.log('Connected');
  } catch (error) {
    console.log('Database connection error', error);
    throw error;
  }
};

const closeConnectionToDatabase = async () => {
    try {
        await client.close();
        console.log('closing database connection');
    } catch (error) {
        throw error;
    }
}

module.exports = {
  connectToDatabase,
  closeConnectionToDatabase,
  dbClient: client,
};
