import Joi from "joi";

const passwordSchema = {
password: Joi.string()
            .ruleset.regex(
                    /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
                )
            .rule({
            message:
                'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
            })
            .required(),
repeat_password: Joi.any().valid(Joi.ref('password')).messages( {"any.only": "Repeated password must match the password",}),
}

export default passwordSchema;