import Admin from "./app/Model/Admin.js";
import Address from "./app/Model/Address.js";
import User from "./app/Model/User.js";
import Role from "./app/Model/Role.js";
import Parties from "./app/Model/Parties.js";
const Task = {};
const log = console.log;
Task.addAdminTable = () => {
  Admin.sync()
    .then(() => {
      log(`Admin Table Created.`);
    })
    .catch((e) => {
      log(e);
    });
};

Task.addAddressTable = () => {
  Address.sync()
    .then(() => {
      log(`Address Table Created.`);
    })
    .catch((e) => {
      log(e);
    });
};

Task.addUserTable = () => {
  User.sync()
    .then(() => {
      log(`User Table Created.`);
    })
    .catch((e) => {
      log(e);
    });
};

Task.addRole = () => {
  Role.sync()
    .then(() => {
      log(`Role Table Created.`);
      Role.bulkCreate([{ role: "ADMIN" }, { role: "SHIPMENT" }])
        .then(() => {
          console.log("Roles Table Populated !!");
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => {
      log(e);
    });
};

Task.addParty = () => {
  Parties.sync()
    .then(() => {
      log(`Parties Table Created.`);
      Parties.bulkCreate([{ name: "SELF", contact: 7079583248 }])
        .then(() => {
          log("Parties Table Populated !!");
        })
        .catch((e) => log(e));
    })
    .catch((e) => {
      log(e);
    });
};
export default Task;
