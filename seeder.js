/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import _yargs from "yargs";
import { hideBin } from "yargs/helpers";
import Task from "./DatabaseScript.js";

const yargs = _yargs(hideBin(process.argv));
yargs.version("1.1.0");

yargs.command({
  command: "1",
  describe: "1. Create Address Table",
  handler(argv) {
    Task.addAddressTable();
  },
});

yargs.command({
  command: "2",
  describe: "2. Create User Table",
  handler(argv) {
    Task.addUserTable();
  },
});

yargs.command({
  command: "3",
  describe: "3. Create Role Table & Populate data",
  handler(argv) {
    Task.addRole();
  },
});

yargs.command({
  command: "4",
  describe: "4. Create Party Table & Populate data",
  handler(argv) {
    Task.addParty();
  },
});

yargs.command({
  command: "5",
  describe: "5. Create Admin Table",
  handler(argv) {
    Task.addAdminTable();
  },
});

yargs.command({
  command: "6",
  describe: "6. Create Category Table",
  handler(argv) {
    Task.addCategory();
  },
});

yargs.command({
  command: "7",
  describe: "7. Create Product Table",
  handler(argv) {
    Task.addProduct();
  },
});

yargs.command({
  command: "8",
  describe: "8. Create Image Table",
  handler(argv) {
    Task.addImages();
  },
});

yargs.command({
  command: "9",
  describe: "9.Product Category Junction Table",
  handler(argv) {
    Task.productCategoryJunction();
  },
});

yargs.command({
  command: "10",
  describe: "10.Carts",
  handler(argv) {
    Task.CreateCart();
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
