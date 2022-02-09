import mjml2html from "mjml";
import env from "dotenv";
env.config();
// eslint-disable-next-line no-undef
const { FRONTENDLINK, MAIL_USER } = process.env;
const Email = {};

Email.registerBody = (name, recipient, token, validTill) => {
  const url = `${FRONTENDLINK}/verify?token=${token}&email=${recipient}&flag=true`;
  const decodedUrl = decodeURIComponent(url);
  const htmlOutput = mjml2html(
    `<mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text font-size="20px" font-weight="bold">
            Hello ${name},
          </mj-text>
          <mj-text font-size="15px">
            Nice to see you here 😊! Please activate your account before its ready to use.
          </mj-text>
            <mj-text font-size="15px">
            Your OTP: <mj-text font-size="15px" font-weight="bold">${token} </mj-text>
          </mj-text>
            <mj-text font-size="15px">
            Either enter the OTP or alternatively Click to verify your account.
          </mj-text>
          <mj-spacer height="20px" />
              <mj-button font-family="Helvetica" font-weight="600" background-color="#43b049" color="white" href="${decodedUrl}" target="_blank" rel="noopener noreferrer">
              Click to verify your account.
             </mj-button>
             <mj-spacer height="20px" />
            <mj-text font-size="15px">
             Please verify your account before token expires !! Link will expire at ${validTill}.
          </mj-text>
            <mj-text font-size="15px">
            For further assistance mail us to ${MAIL_USER}.
          </mj-text>
          <mj-spacer height="20px" />
            <mj-text font-size="15px">
            Kind Regards,
          </mj-text>
          <mj-text font-size="15px">
            Teams
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
    </mjml>
    `
  );
  return htmlOutput.html;
};

Email.forgotPassword = (recipient, token, validTill) => {
  const url = `${FRONTENDLINK}/verify?token=${token}&email=${recipient}&flag=false`;
  const decodedUrl = decodeURIComponent(url);
  const htmlOutput = mjml2html(
    `<mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-spacer height="10px" />
            <mj-text font-size="15px">
            Your OTP: <mj-text font-size="15px" font-weight="bold">${token} </mj-text>
          </mj-text>
            <mj-text font-size="15px">
            Either enter the OTP or alternatively Click on verify your account.
          </mj-text>
          <mj-spacer height="20px" />
              <mj-button font-family="Helvetica" font-weight="600" background-color="#43b049" color="white" href="${decodedUrl}" target="_blank">
              Click to verify your account.
             </mj-button>
             <mj-spacer height="20px" />
            <mj-text font-size="15px">
             Please verify your account before token expires !! Link will expire at ${validTill}.
          </mj-text>
            <mj-text font-size="15px">
            For further assistance mail us to ${MAIL_USER}.
          </mj-text>
          <mj-spacer height="20px" />
            <mj-text font-size="15px">
            Kind Regards,
          </mj-text>
          <mj-text font-size="15px">
            Teams
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
    </mjml>
    `
  );
  return htmlOutput.html;
};

export default Email;
