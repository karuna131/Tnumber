const knex = require('../Database/db');
const bcrypt = require('bcrypt')

const saltRounds = 10;

//user signup 
CreateUser = (req,res)=>{
    if(!req.body.email || !req.body.password){
        res.send({statement : false,
            status :201,
            message : 'Fill All Information'
        })
        return ""
    }
    const userData = {
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, saltRounds)       
    }
    // console.log(userData);
    knex('Signup').insert(userData).then((count)=>{
    res.send({success : 'Successfull',
        message : `${count} information inserted`
    })
    })
    .catch((err)=>{
        res.send({massage : err});
        console.log('Data Is Not Inserted');
    })
};


module.exports = {CreateUser};