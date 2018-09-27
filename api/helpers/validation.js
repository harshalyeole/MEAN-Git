const validator = require(`validator`);

module.exports = {
    isEmptyOrNull: string => !(string && string.trim()),

    isNotEmail: email => !(email && validator.isEmail(email)),

    isNotBoolean: string => !(typeof(string) === `boolean`),

    isNotMongoId: id => !(id && validator.isMongoId(id)),

    isPositiveInteger: number => number && parseInt(number) && number > 0
};
