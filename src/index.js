const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

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

    let formData= {
        name: req.body.nickName,  
        email :req.body.email,
        password: req.body.password 

    }
    console.log(formData)

    //let dbData = await signUpModel.create(formData)


    res.send('Thank u wali html ')


})
