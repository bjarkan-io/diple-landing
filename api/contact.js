const mailgun = require("mailgun-js")({
  apiKey: process.env.mailgun_api_key,
  domain: "www.diple.app",
}
);

const to = ["contact@diple.app"];
// Also add your email address as the sender
// Must belong to a verified SES account
const from = "contact@diple.app";

export default (req, res) => {
  const body = req.body;

  mailgun.messages().send(
    {
      from: from,
      to: to,
      subject: `Contact form submission`,
      text:
        `Name: ${body.name}
        Email: ${body.email}
        Message: ${body.message}`
    },
    (err, data) => {
      if (err) {
        res.send({ status: "error" });
      } else {
        res.send({ status: "success" });
      }
    }
  );
};
