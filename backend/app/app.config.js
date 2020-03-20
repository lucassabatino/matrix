module.exports = {
  ROOMS_SOURCE: process.env.ROOMS_SOURCE,
  ENVIRONMENT: process.env.NODE_ENV,
  GOOGLE_CREDENTIAL:
    process.env.GOOGLE_CREDENTIAL
    || "924991972177-9uuj35peccqsnk0pdnupok5qp86lpo1c.apps.googleusercontent.com",
  ENFORCE_SSL: process.env.ENFORCE_SSL || "false",
  CUSTOM_STYLE: process.env.CUSTOM_STYLE || "",
  HOST: "0.0.0.0",
  PORT: process.env.PORT || 8080,
};
