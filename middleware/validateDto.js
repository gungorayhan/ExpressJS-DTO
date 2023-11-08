const ApiError = require('../error/api-error');

function validateDto (schema){
    return async(req,res,next)=>{
        try {
            const validateBody= await schema.validate(req.body)
            console.log("body" + validateBody)
            req.body=validateBody
            console.log("valdiated body" + req.body)
            next();
        } catch (err) {

            next(ApiError.badRequest(err))
        }
    }
}

module.exports= validateDto