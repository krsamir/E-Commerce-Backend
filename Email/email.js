import transporter from "./config.js";
import EmailBody from "./emailbody.js";

const Email = {};
Email.registerMail = async (data, sentStatus) => {
  const { name, recipient, token, validTill } = data;
  const { MAIL_USER } = process.env;
  var mailOptions = {
    from: MAIL_USER,
    to: recipient,
    subject: "Registration for [name]",
    html: EmailBody.registerBody(name, recipient, token, validTill),
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      sentStatus(0);
    } else {
      sentStatus(1);
    }
  });
};

Email.forgotPassword = async (data, sentStatus) => {
  const { recipient, token, validTill } = data;
  const { MAIL_USER } = process.env;
  var mailOptions = {
    from: MAIL_USER,
    to: recipient,
    subject: "Reset Password",
    html: EmailBody.forgotPassword(recipient, token, validTill),
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      sentStatus(0);
    } else {
      sentStatus(1);
    }
  });
};
export default Email;
