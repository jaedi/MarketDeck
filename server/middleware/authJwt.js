const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

verifyToken = async (req, res, next) => {
    let token = await req.headers["x-access-token"];

    if(!token) {
        return await res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, config.secret, async (err, decoded) => {
        if(err) {
            return await res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = await decoded.id;
        await next();
    });
};

isAdmin = async (req, res, next) => {
    User.findByPk(req.userId).then(async user => {
        user.getRoles().then(async roles => {
            for(let i = 0; i < roles.length; i++) {
                if(await roles[i].name ==="admin") {
                    return await next();
                }
            }

            return await res.status(403).send({
                message: "Require Admin Role!"
            });
        });
    });
};

isSeller = async (req, res, next) => {
    User.findByPk(req.userId).then(async user => {
        user.getRoles().then(async roles => {
            for( let i = 0; i < roles.length; i++) {
                if(await roles[i].name === "seller") {
                    return await next();
                }
            }

            return await res.status(403).send({
                message: "You need to Sign Up as a Seller to Continue."
            });
        });
    });
};

isBuyer = async (req, res, next) => {
    User.findByPk(req.userId).then(async user => {
        user.getRoles().then(async roles => {
            for(let i =  0; i < roles.length; i++) {
                if(await roles[i].name === "buyer") {
                    return await next();
                }
            }
            
            return await res.status(403).send({
                message: "You need to Sign Up as a Buyer to Continue."
            });
        });
    });
};


const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isSeller: isSeller,
    isBuyer: isBuyer
};
module.exports = authJwt;