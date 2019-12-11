"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = require("joi");
const language = {
    key: '{{label}} ',
};
const defaultOptions = {
    language,
    allowUnknown: false,
};
exports.validate = (payload, schema, options) => {
    const joiValidationOptions = options
        ? Object.assign({}, defaultOptions, options)
        : defaultOptions;
    const { error, value } = joi_1.validate(payload, schema, joiValidationOptions);
    if (error) {
        throw error;
    }
    return value;
};
//# sourceMappingURL=index.js.map