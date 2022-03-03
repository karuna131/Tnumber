const knex = require('../Database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

SignIn = (req,res)=>{
    if(!req.body.email || !req.body.password){
        res.send({statement : false,
            status :201,
            message : 'Email and Password Both Are Required'
        })
        return ""
    }
    else{
        knex.select("*").from('Signup').where('email', '=', req.body.email, 'password', '=', req.body.password)
        .then((data)=>{
            const token = jwt.sign({"email": data[0].email}, "KarunaJaiswal", {expiresIn : "8h"});
            res.cookie('user',token);
            console.log({message : data});
            bcrypt.compare(req.body.password, data[0].password, (err, result)=>{
                if(result){
                    res.send({
                        statement : true,
                        status : 200,
                        message : 'Login successfully',
                        'token' : token,
                        "token vaildity" : "8h"
                    })
                }
                else{
                    res.json({
                        success : false,
                        message : 'passwords do not match'
                    });
                }
                })
        })
        .catch((err)=>{
            res.json({message : 'Your Email Id Is Wrong '});
            console.log(err);
        })
    }
}


module.exports = {SignIn};