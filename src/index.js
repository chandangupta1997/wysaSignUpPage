const express = require("express");
const encryption = require('./passwords/hashing')

const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const userModel = require('./models/userModel')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect(
    "mongodb+srv://shritamMohapatra:mongodb69@cluster0.drnak.mongodb.net/simpleSignUp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT||3000, function () {
  console.log("app is runnig on port 3000");
});


app.get('/signUp',function(req,res){
    res.sendFile(__dirname + '/public/signUp.html')
})


app.post('/signUp', async function (req,res){

  const hashedPassword = await encryption.setEncription(req.body.password)

    let formData= {
        name: req.body.nickName,  
        email :req.body.email,
        password: hashedPassword

    }
    console.log(formData)

    let dbData = await userModel.create(formData)


    res.status(200).send({msg:"Thank You Html", data:dbData})


})


// for login we will be getting user id password 

// match the req.body.password from decrypted password from db 
// see passwords/hashing for code 




app.post('/login',async function (req,res){


  //const matchPassword = await setEncription.matchEncription(req.body.password, hashedPassword)
    res.send("for login we will be getting user id password match the req.body.password from decrypted password from db see passwords/hashing for code")

})
