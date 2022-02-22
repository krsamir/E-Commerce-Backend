/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
import Task from "./DatabaseScript.js";

const yargs = _yargs(hideBin(process.argv));
yargs.version("1.1.0");

yargs.command({
  command: "addadmin",
  describe: "Create Admin Table",
  handler(argv) {
    Task.addAdminTable();
  },
});

yargs.command({
  command: "addaddress",
  describe: "Create Address Table",
  handler(argv) {
    Task.addAddressTable();
  },
});

yargs.command({
  command: "adduser",
  describe: "Create User Table",
  handler(argv) {
    Task.addUserTable();
  },
});

yargs.command({
  command: "addRole",
  describe: "Create Role Table & Populate data",
  handler(argv) {
    Task.addRole();
  },
});

yargs.command({
  command: "addParty",
  describe: "Create Party Table & Populate data",
  handler(argv) {
    Task.addParty();
  },
});

// yargs.command({
//     command: "addadmin",
//     describe: "Create Admin Table",
// Passing Configuration
// builder:{
//     title:{
//         describe: 'Note Title',
//         demandOption: true,
//         type: 'string'
//     },
//     body:{
//         describe: 'Note Body',
//         demandOption: true,
//         type: 'string'
//     }
// },
//     handler(argv) {
//       Task.addAdminTable();
//     },
//   });

yargs.parse();
