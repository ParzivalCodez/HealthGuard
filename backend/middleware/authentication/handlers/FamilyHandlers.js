// Dependencies & Packages Import
const database = require("../../../database/database");
const randomString = require("randomstring");

const FamilyGroupCreation = (requestBody) => {
  const FamilyObject = {
    FamilyName: requestBody.familyName,
    FamilyDescription: "Lorem Ipsum Delor",
    FamilyCreator: String,
    FamilyMembers: Array,
    FamilyCode: randomString.generate(16),
  };
  database.manage("insert", "families", FamilyObject);
};

const FamilyGroupJoin = async (requestBody) => {
  let data = await database.manage(
    "update",
    "users",
    {
      "UniqueToken.ProfileToken": requestBody.token,
    },
    {
      $set: { familyAssociation: requestBody.familyCode },
    },
  );

  let Family = await database.manage(
    "update",
    "families",
    {
      familyCode: requestBody.familyCode,
    },
    {
      $push: { familyMembers: requestBody.token },
    },
  );
};

module.exports = {
  create: FamilyGroupCreation,
  join: FamilyGroupJoin,
};
