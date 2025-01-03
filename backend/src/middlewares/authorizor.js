const authorizor = (checkRole) => {
    return async (req,res,next) => {
        try {
        const { role } = req;
        if (checkRole.includes(role)) {
            next();
        }else{
            console.log(`Authorizer:not an Authorized user`);
            return res.status(401).json({ data:null,msg:"Authorizer:not an Authorized user",auth:false});
        }
    } catch (err) {
        console.log(`Authorizer:an error occurred:${err}`);
        res.status(500).json({ data:null,msg:"an server error in authorization",auth:false});
    }
}
}

module.exports = authorizor;