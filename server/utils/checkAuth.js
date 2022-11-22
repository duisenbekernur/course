const jwt = require('jsonwebtoken');

const checkAuth = (req,res,next) => {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, '');
    if(token){
        try {
            const decoded = jwt.verify(token, '123123');
            req.userId = decoded._id;
            next();
        } catch (error) {
            return res.status(405).json({
                message: "Error Occured with token"
            })
        }
    }
    else{
        return res.status(405).json({
            message: "Token not found"
        })
    }
}

module.exports = checkAuth;