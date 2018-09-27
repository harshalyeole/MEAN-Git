
// This maps error constants with error messages.
module.exports = {
    // User related error codes
    INVALID_API_KEY: `The provided api key is invalid`,
    INVALID_TOKEN: `The provided access token is invalid`,
    NO_TOKEN: `No token is provided`,
    INVALID_USER: `User not found`,
    INVALID_EMAIL_ADDRESS: `Enter a valid email address`,
    LOGIN_FAILED: `Email or password is incorrect`,
    ERROR_IN_USER_ADDITION: `An error occurred while creating user`,
    PASSWORD_DOES_NOT_MATCH: `Email or Password is not correct`,
    CONFIRM_PASSWORD_NOT_SAME: `Password and confirm password should match`,
    ERROR_IN_UPDATE_PASSWORD: `An error is occurred while updating password`,
    VERIFICATION_CODE_ERROR: `Verification token is empty or invalid`,
    ERROR_WHILE_MAIL_SENDING: `An unexpected error occurred while sending an email`,
    TOKEN_EXPIRED: `Invalid or expired token`,
    CODE_EXPIRED: `Invalid or expired verification code`,
    PLEASE_TRY_AGAIN: `Please try again`,
    EMAIL_ALREADY_EXIST: `Email already exists`,
    PLAN_ALREADY_EXIST: `Plan already exists`,
    INVALID_APIKEY: `Invalid or missing API key`,


    FETCHING_AGENTS_ERROR: 'Error while getting agents',


    //Image File Uploding Error
    IMAGE_FILE_ERROR: `Error while uploading the image`,
    INVALID_PAGENO_OR_PAGESIZE: `Invalid page number or page size`,
    CONFIRMATION_TOKEN_EXPIRED: `Confirmation token has expired`,
    EMAIL_ID_NOT_REGISTER: `Please enter registered email id`,
    NO_USER_ROLE_FOUND_IN_DATABASE: `No user role data found in the database`,
    NOT_APP_USER: `You are not app user`,
    ADDRESS_FETCH_ERROR: `Unable to fetch the address of the location`,
    NOTIFICATION_DATA_NOT_FOUND: `Notification data not found`,
    NOTIFICATION_NOT_FOUND: `Notification not found`,
    DELETE_NOTIFICATION_ERROR: `Unable to delete the notification`,
    NOT_ACTIVE_USER: `This user is not active any more`,
    INVALID_BOOLEAN_VALUE: `Accepted value is not a boolean value`,
    EMPTY_STRING: `Required input string is empty or missing`,
    MISSING_INPUT: `Missing input values`,
    INVALID_EMAIL_OR_PASSWORD_KEY: `Please provide valid email or password`,
    PASSWORD_MISMATCH_ERROR: `Invalid old password`,

    REQUIRED_FIELDS_MISSING: `Required fields are missing`,
    CREATE_DOCUMENT_ERROR: `Error while adding document for user`,
    BOOK_SHOWING_ERROR: `Error while booking event`,

    UNAUTHORIZED: `Authentication failed`,
    INSUFFICIENT_PERMISSIONS: `User has insufficient permissions`,

    // Stripe
    CREATE_CUSTOMER_ERROR: `Error while creating stripe customer`,
    CREATE_SUBSCRIPTION_ERROR: `Error while creating stripe subscription`,
    STORING_STRIPE_DETAILS: `Error while storing stripe details`,
    UPDATE_SUBSCRIPTION_ERROR: `Error while updating stripe subscription`,

    NOT_FOUND: `Page not found`,
    UNKNOWN_ERROR: `Database error is occur or something went wrong`,
    GETTING_DATA: `Error while getting data`,
    STORING_DATA: `Error while storing data`,
    REMOVING_DATA: `Error while removing data`

};
