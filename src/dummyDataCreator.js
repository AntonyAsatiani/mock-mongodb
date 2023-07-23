const faker = require("faker");

const formDummyData = (numberOfDocuments) => {
  const arrayOfCollections = [];
  for (let i = 0; i < numberOfDocuments; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const date = new Date();

    const insertionObject = {
      firstName,
      lastName,
      email,
      date,
    };
    arrayOfCollections.push(insertionObject);
  }

  return arrayOfCollections;
}

module.exports = {
  formDummyData,
};
