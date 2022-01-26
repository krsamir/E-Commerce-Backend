import Admin from "./app/Model/Admin.js";
import Address from "./app/Model/Address.js";
import User from "./app/Model/User.js";
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
export default Task;
