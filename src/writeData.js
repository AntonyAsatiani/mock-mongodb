const { dbClient } = require('./db');

const insertRecord = async (insertionObject) => {
  const collection = dbClient.db("mongoparallel").collection("dummy_collection");
  try {
      console.log('Inserting');
      await collection.insertMany(insertionObject);
  } catch (error) {
      console.log('error while inserting :>> ', error);
      throw error;
  }
}


module.exports = { insertRecord };
