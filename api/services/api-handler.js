const ErrorCode = require(`../helpers/error-codes`);
const ErrorConstant = require(`../helpers/error-messages`);
const logger = require("../helpers/winston");

module.exports = {
    setErrorResponse: (serverError, error, res) => {
        if (serverError) {
            logger.error(serverError);
        } else {
            logger.error(ErrorConstant[error]);
        }

        let httpCode = ErrorCode["BAD_REQUEST"];
        if (error === "INVALID_TOKEN" || error === "NO_TOKEN") {
            httpCode = ErrorCode["UNAUTHORIZED"]
        } else if (error === "INSUFFICIENT_PERMISSIONS") {
            httpCode = ErrorCode["FORBIDDEN"]
        }
        const response = {
            isError: true,
            error: {
                code: ErrorCode[error],
                message: ErrorConstant[error]
            }
        };
        return res.status(httpCode).send(response);
    },
    setSuccessResponse: (data, res) => {
        const response = {
            isError: false,
            data: data
        };
        return res.status(ErrorCode["HTTP_SUCCESS"]).send(response);
    },
    setErrorResponseAsIs: (serverError, error, res) => {
        if (serverError === "") {
            logger.error(ErrorConstant[error]);
        } else {
            logger.error(serverError);
        }
        const response = {
            isError: true,
            error: {
                code: ErrorCode["BAD_REQUEST"],
                message: error
            }
        };
        return res.status(ErrorCode["BAD_REQUEST"]).send(response);
    }
};