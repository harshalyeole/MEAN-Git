
// This file will contain secrets related to various third-party services.

module.exports = {
    jwtSecret: `lahsrah`,
    // Access control configuration for client
    // https://www.w3.org/TR/2008/WD-access-control-20080912
    allowedOrigins: `*`,
    allowedMethods: `GET, POST, PUT, DELETE, OPTIONS`,
    allowedHeaders: `Cache-Control, Content-Type, Accept, token`,
    exposedHeaders: `Cache-Control, Content-Type, Accept, token`,
    preFlightRequestMaxAge: `1728000`,

    // Stripe
    secretKey: `sk_test_A7eTlUGNALOK036La4TfL7Ea`,
    publishableKey: `pk_test_2bhDSOWmjbSKJf7Dnt1XrpDZ`,
};
