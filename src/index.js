const { formDummyData } = require('./dummyDataCreator');
const { insertRecord } = require('./WriteData');
const { connectToDatabase, closeConnectionToDatabase, dbClient } = require('./db');

const numberOfDocuments = 10000000;

( async () => {
  const chunkSize = 100000;
  const arrayOfCollections = [];
  await connectToDatabase();
  const dummyData = formDummyData(numberOfDocuments);
  for (let i = 0; i < numberOfDocuments; i+=chunkSize) {
    let chunk = dummyData.slice(i, i + chunkSize);
    arrayOfCollections.push(insertRecord(chunk));
  }
  try {
    console.log("executing promises")
    await Promise.all(arrayOfCollections);
  } catch (error) {
    console.log('error :>> ', error);
  }

  await closeConnectionToDatabase();
})();