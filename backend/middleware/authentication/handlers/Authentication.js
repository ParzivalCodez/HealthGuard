// Dependencies & Packages Import
const database = require("../../../database/database");
const randomString = require("randomstring");

// Application Registration Handler
const ApplicationRegistrationHandler = (requestBody) => {
  const RegistrationProfile = {
    firstName: requestBody.firstName, // Assuming requestBody is defined and has firstName
    middleName: requestBody.middleName, // Same assumption as above
    lastName: requestBody.lastName, // Same assumption as above
    emailAddress: requestBody.emailAddress,
    password: requestBody.password,
    UniqueToken: {
      ProfileToken: randomString.generate(16), // Generates a 16-character string
    },
    location: {
      allowedLocation: false, // Example value, replace with actual boolean
      latitude: undefined, // Example value, replace with actual latitude as string
      longitude: undefined, // Example value, replace with actual longitude as string
    },

    relationshipStatus: requestBody.relationships,
    familyAssociation: String,
  };
  database.manage("insert", "users", RegistrationProfile);
};

// Application Login Handler
const ApplicationLoginHandler = async (requestBody) => {
  let RequestBodyCredentials = {
    emailAddress: requestBody.emailAddress,
    password: requestBody.password,
  };

  try {
    let data = await database.manage("find", "users", RequestBodyCredentials);
    if (data.length >= 0) {
      return data;
    } else {
      return "Incorrect Email Or Password!";
    }
  } catch (error) {
    return "There was an error, Please try again!";
  }
};

module.exports = {
  Login: ApplicationLoginHandler,
  Register: ApplicationRegistrationHandler,
};
