# aSignUpPAge 


this is a simple signUp Page(Wysa ) here  form of html post the data to node js (app)


for password in DB used package bcCrypt 





successful response 

{"msg":"Thank You Html",
        "data":
        {"name":"Disco",
        "email":"chandanguptajobs@gmail.com","password":"$2b$10$lsIN3MIPk9HhDTR4Y2YCtOg4s2ettWBhD.Vxn7qRza8jeR7Gbbauq"
        
        
        
        ,"_id":"62f0bad1e45ff3827b1b5ff4","__v":0}}




# for Login 

1)will get email and password from user 
2) decrypt the password and match it from  MongoDb hashed password 

3)from token (using Jwt ) containing userId 


4) Middleware part (auhentication and authorization )
checking token present or not(authentication )
decoding token (authorization )




