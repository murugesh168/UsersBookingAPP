const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
        if(!authHeader){
            return res.status(401).json({error :"No Token Provide, Authorization denied"});
        };
    try{
       const token = authHeader.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : authHeader;
       const decoded = jwt.verify(token,process.env.JWT_SECRET);
       req.user = decoded;
       next();
    }catch(error){
        return res.status(401).json({error : "Invalid or Expired Token"});
    }
};

module.exports = authMiddleware;