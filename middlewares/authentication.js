const jwt=require("../utils/jwt");
//const jwt=require("jsonwebtoken");

function asureAuth(req,res,next){
  //  console.log(req.headers.authorization);
  if(!req.headers.authorization){
    return res.status(403).send({msg: "La peticion no tiene la cabecera de autenticación"})
  }

  const token=req.headers.authorization.replace("Bearer ","");
  //console.log(token);

  try {
    const payload=jwt.decoded(token);

    const {exp}=payload;
    const currentData=new Date().getTime();

    if(exp<=currentData){
        return res.status(400).send({msg: "El token ha expirado"})
    }

    req.user=payload;

    next();

  } catch (error) {
   return  res.status(400).send({msg: "Token inválido"})
  }
  
}

module.exports={
    asureAuth
}