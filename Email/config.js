import nodemailer from "nodemailer";
import { config } from "dotenv";
config();
// eslint-disable-next-line no-undef
const { MAIL_USER, MAIL_PASSWORD } = process.env;

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});

export default transporter;
