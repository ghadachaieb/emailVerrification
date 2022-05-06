const express =require("express"); 
const app=express(); 
const cors= require("cors"); 
const pool= require("./db"); 
const { Pool } = require("pg");
const router = require("./routes/jwtAuth");
const { createUser , getUser  } = require("./models/users");
//midelware
app.use(cors()); 
app.use(express.json()); 


//register and login routes 
app.use("/auth",require("./routes/jwtAuth")); 
 //dashboard route 
 app.use("/dashboard",require("./routes/dashboard")); 
/////////////////////////  reset password
 /////////////////////////////////////////////////// User //////////////////////////////////
 app.get("/search", async(req, res) => {

    try {
        const { role } = req.query; 
    
    
    //role name
    
    
        const users = await pool.query("SELECT * FROM role WHERE role_name LIKE $1", [
            `%${role}%`
        ]); 
        res.json(users.rows); 
    
    
    
    } catch (err) {
        console.error(err.message); 
    }
    
    
    })
    
    
    
    
//create a user  
/*app.post("/userss", async(req,res) => {
    //await 
    try {
    console.log(req.body); 
    const {email , name, password, role_name} = req.body; 
    const newUser = await pool.query(
       `INSERT INTO utilisateur("email", "name","password","role_name")  VALUES ($1, $2,$3,$4) 
 WHERE (utilisateur.role_id=role.role_id ) `, [email, name,password,role_name]
    ); 
    res.json(newUser.rows[0]); 
        
    } catch (err) {
        console.error(err.message); 
    }

})*/
app.post("/users", async(req,res) => {
    //await 
    try {
    console.log(req.body); 
    const {email , name, password, role_id} = req.body; 
    const newUser = await pool.query(
       `INSERT INTO utilisateur("email", "name","password","role_id")  VALUES ($1, $2,$3,$4)
      `, [email, name,password,role_id]
    ); 
    res.json(newUser.rows[0]); 
        
    } catch (err) {
        console.error(err.message); 
    }
  
})
// get all user 
//    const allUsers = await pool.query ("SELECT (iduser,email,role_name) FROM utilisateur u, role r WHERE u.role_id=r.role_id"); 

app.get("/users", async (req,res) => {

    try {
    const allUsers = await pool.query ("SELECT * FROM utilisateur order by iduser  asc "); 
    res.json(allUsers.rows); 
    
    }catch (err) {
        console.error(err.message); 
    }})




// get a user
app.get("/users/:id" , async(req, res) => {
    try {
     
      const {id} = req.params; 
      const user= await pool.query
       ("SELECT * FROM utilisateur WHERE iduser = $1", [id]); 
      res.json(user.rows[0]); 
    
    
    } catch (err) {

        console.error(err.message);
    } })
 ////////////////////////////////////////////////////////////
   app.get("/RoleName", async (req,res) => {

          try {
          const allUsers = await pool.query
           ("SELECT (role_name),role_id FROM  role "); 
          res.json(allUsers.rows); 
          
          }catch (err) {
              console.error(err.message); 
          }})
//update a user 
app.get("/RoleUser", async (req,res) => {

  try {
  const allUsers = await pool.query
   ("SELECT email,iduser,(role_name) FROM  utilisateur u,role r WHERE u.role_id=r.role_id "); 
  res.json(allUsers.rows); 
  
  }catch (err) {
      console.error(err.message); 

  }})
  app.get("/rr", async (req,res) => {

    try {
    const allUsers = await pool.query
     ("SELECT email FROM  utilisateur u,role r WHERE u.role_id=r.role_id AND r.role_name like 'admin'"); 
    res.json(allUsers.rows); 
    
    }catch (err) {
        console.error(err.message); 
  
    }})
  app.put("/RoleUser/:id", async (req, res) => {

    try {
      
    const {id} = req.params; 
    const {email , name,password,role_id} = req.body; 
    const updateUser = await  pool.query(`UPDATE "utilisateur" 
     SET "email" = $1 , "name"= $2 ,"password"=$3 ,"role_name"=$4 `, [email, name,password,role_id, id]); 
    
     res.json("User was updated "); 
    
        
    } catch (err) {
        console.error(err.message); 
    }
    
    })
app.put("/users/:id", async (req, res) => {

    try {
      
    const {id} = req.params; 
    const {email , name,password,role_id} = req.body; 
    const updateUser = await  pool.query(`UPDATE "utilisateur" 
     SET "email" = $1 , "name"= $2 ,"password"=$3 ,"role_id"=$4 WHERE "iduser" = $5 `, [email, name,password,role_id , id]); 
    
     res.json("User was updated "); 
    
        
    } catch (err) {
        console.error(err.message); 
    }
    
    })

    //delete a User
app.delete("/users/:id", async(req, res)=> {
try {
    
const {id} = req.params; 
const  deleteUser= await pool.query("DELETE FROM utilisateur WHERE  iduser = $1", [id] ); 
res.json(" user was deleted !"); 

} catch (err) {
    console.error(err.message); 
}

} )
   



///////////////////////////////////////////////////////  Role //////////////////////////////////





app.get("/roles", async (req,res) => {
    
    try {
    const allRoles = await pool.query ("SELECT * FROM role"); 
    res.json(allRoles.rows); 
    
    }catch (err) {
        console.error(err.message); 
        
    }})


//create a role  
app.post("/roles", async(req,res) => {
    //await 
    try {
    console.log(req.body); 
    const {role_name , role_description} = req.body; 
    const newRole = await pool.query(
        `INSERT INTO role("role_name", "role_description") VALUES ($1, $2) `, [role_name, role_description]
    ); 
    res.json(newRole.rows[0]); 
        
    } catch (err) {
        console.error(err.message); 
    }

})

// get a role
 app.get("/roles/:id" , async(req, res) => {
try {
 
  const {id} = req.params; 
  const role= await pool.query
   ("SELECT * FROM role WHERE role_id = $1",
    [id]); 
  res.json(role.rows[0]); 


} catch (err) {
    console.error(err.message);
} })


app.get("/roles", async (req,res) => {

try {
const allRoles = await pool.query ("SELECT * FROM role"); 
res.json(allRoles.rows); 

}catch (err) {
    console.error(err.message); 
    
}})


//update a role 

app.put("/roles/:id", async (req, res) => {

try {
  
const {id} = req.params; 
const {role_name , role_description} = req.body; 
const updateRole = await  pool.query(`UPDATE "role"
 SET "role_name" = $1 , "role_description"= $2 WHERE "role_id" = $3 `, [role_name, role_description , id]); 

 res.json("Role was updated "); 

    
} catch (err) {
    console.error(err.message); 
}

})



//delete a role
app.delete("/roles/:id", async(req, res)=> {
try {
    
const {id} = req.params; 
const  deleteRole= await pool.query("DELETE FROM role WHERE  role_id = $1", [id] ); 
res.json(" role was deleted !"); 

} catch (err) {
    console.error(err.message); 
}

} )

///////////////////////////////////////////////////////  Tiers   //////////////////////////////////////////

app.get("/TypeTier", async (req,res) => {

    try {
    const alltier = await pool.query
     ("SELECT distinct(typetier),codetier FROM tiers" ); 
    res.json(alltier.rows); 
    }catch (err) {
        console.error(err.message); 

}});

/////////////////////////////////////////////////////
app.get("/TypeTier", async (req,res) => {                                
    try {
    const alltier = await pool.query
     ("SELECT distinct(typetier) FROM  modele,tiers WHERE modele.codetier=tiers.codetier "); 
    res.json(alltier.rows); 
    }catch (err) {
        console.error(err.message); 
    }});

///////////////////////     Modéle            ///////////////////////////////////

//////////////// supprimer 

app.delete("/modele/:id", async(req, res)=> {
    try {
        
    const {id} = req.params; 
    const  deleteModele= await pool.query("DELETE FROM modele WHERE  idmodele = $1", [id] ); 
    res.json(" user was deleted !"); 
    
    } catch (err) {
        console.error(err.message); 
    }
    
    } )

/////////// get modele 
app.get("/CodeTierModele/:codetier" , async(req, res) => {
    try {
     
      const {codetier} = req.params; 
      const role= await pool.query
       ("SELECT * FROM modele WHERE codetier = $1",
        [codetier]); 
      res.json(role.rows[0]); 
    
    
    } catch (err) {
        console.error(err.message);
    } })
///////////  update model 
app.put("/modele/:id", async (req, res) => {

    try {
    const {id} = req.params; 
    const {name,idtype,codetier} = req.body; 
    const updateModel = await  pool.query(`UPDATE "modele"  SET "name" = $1  ,"idtype"=$2  , "codetier"=$3 WHERE "idmodele" = $4 `, [name,idtype,codetier , id]); 
    
     res.json("Model was updated "); 

    } catch (err) {
        console.error(err.message); 
    }
    
    })
 
////////////////// add modele
app.post("/modele", async(req,res) => {
    //await 
    try {
    console.log(req.body); 
    const {name,idtype,file,codetier} = req.body; 
    const newRole = await pool.query(
        `INSERT INTO modele("name", "idtype","file","codetier") VALUES ($1, $2,$3,$4) `, [name , idtype,file,codetier]
    ); 
    res.json(newRole.rows[0]); 
        
    } catch (err) {
        console.error(err.message); 
    }
})
///////////////
app.get("/modeles/:id" , async(req, res) => {
    try {
     
      const {id} = req.params; 
      const user= await pool.query
       ("SELECT * FROM modele WHERE idmodele = $1", [id]); 
      res.json(user.rows[0]); 
    
    
    } catch (err) {

        console.error(err.message);
    } })
///////////////////////
app.get("/modeleName/:idtype" , async(req, res) => {
    try {
     
      const {idtype} = req.params; 
      const user= await pool.query
       ("SELECT  idmodele,name,(nametype),(nametier) FROM  modele u,type r ,tiers WHERE u.idtype=r.idtype AND u.codetier=tiers.codetier AND  u.idtype = $1", [idtype]); 
      res.json(user.rows[0]); 
    
    
    } catch (err) {

        console.error(err.message);
    } })
///////////////////////
app.get("/ModeleP", async (req,res) => {

    try {
    const allUsers = await pool.query ("SELECT  idmodele,name,(nametype),(nametier) FROM  modele u,type r ,tiers WHERE u.idtype=r.idtype AND u.codetier=tiers.codetier"); 
    res.json(allUsers.rows); 
    
    }catch (err) {
        console.error(err.message); 
    }})
///////////////////////
app.get("/ModelePP", async (req,res) => {

    try {
    const allUsers = await pool.query ("SELECT  nametype FROM  modele u,type r  WHERE u.idtype=r.idtype"); 
    res.json(allUsers.rows); 
    
    }catch (err) {
        console.error(err.message); 
    }})
///////////////////////
app.get("/modeles", async (req,res) => {

    try {
    const allUsers = await pool.query ("SELECT * FROM modele order by idmodele  asc "); 
    res.json(allUsers.rows); 
    
    }catch (err) {
        console.error(err.message); 
    }})
////////////////////////
app.get("/ModeleId", async (req,res) => {

    try {
    const allUsers = await pool.query ("SELECT idtype,codetier FROM  modele"); 
    res.json(allUsers.rows); 
    
    }catch (err) {
        console.error(err.message); 
    }})
////////////////////////
app.get("/ModeleType", async (req,res) => {

    try {
    const allUsers = await pool.query
    ("SELECT idmodele,name,file,(nametype),(nametier) FROM  modele u,type r ,tiers WHERE u.idtype=r.idtype AND u.codetier=tiers.codetier order by idmodele asc ");
    res.json(allUsers.rows); 
    
    }catch (err) {
        console.error(err.message); 
  
    }})
///////////////////////////////////////////////
app.get("/ModeleType1", async (req,res) => {

    try {
    const allUsers = await pool.query
     ("SELECT nametype,idtype FROM type"); 
    res.json(allUsers.rows); 
    
    }catch (err) {
        console.error(err.message); 
  
    }})
app.get("/ModeleCode", async (req,res) => {

        try {
        const allUsers = await pool.query
         ("SELECT distinct(nametier) FROM modele,tiers WHERE  modele.codetier=tiers.codetier  "); 
        res.json(allUsers.rows); 
        
        }catch (err) {
            console.error(err.message); 
      
        }})

    
///////////////////////////////////////////////

app.get("/types", async (req,res) => {
    
    try {
    const allRoles = await pool.query ("SELECT * FROM type"); 
    res.json(allRoles.rows); 
    
    }catch (err) {
        console.error(err.message); 
        
    }})

////////////////////////////////////
app.get("/NameTier/:typetier" , async(req, res) => {
    try {
     
      const {typetier} = req.params; 
      const user= await pool.query
       ("SELECT nametier FROM tiers WHERE  typetier= $1", [typetier]); 
      res.json(user.rows[0]); 
    } catch (err) {

        console.error(err.message);
    } })  
    /////
    app.get("/type/:id" , async(req, res) => {
        try {
         
          const {id} = req.params; 
          const user= await pool.query
           ("SELECT * FROM type WHERE idtype = $1", [id]); 
          res.json(user.rows[0]); 
        
        
        } catch (err) {
    
            console.error(err.message);
        } })  
/////////////
app.delete("/type/:id", async(req, res)=> {
    try {
        
    const {id} = req.params; 
    const  deleteType= await pool.query("DELETE FROM type WHERE  idtype = $1", [id] ); 
    res.json(" Type was deleted !"); 
    
    } catch (err) {
        console.error(err.message); 
    }
    
    } )

    ///////////////
    app.post("/type", async(req,res) => {
        //await 
        try {
        console.log(req.body); 
        const {nametype } = req.body; 
        const newRole = await pool.query(
            `INSERT INTO type("nametype") VALUES ($1) `, [nametype]); 
        res.json(newRole.rows[0]); 
            
        } catch (err) {
            console.error(err.message); 
        }
    
    })
  ////////////////
  
  app.put("/type/:id", async (req, res) => {

    try {
      
    const {id} = req.params; 
    const {nametype} = req.body; 
    const updateType = await  pool.query(`UPDATE "type"
     SET "nametype" = $1  WHERE "idtype" = $2 `, [nametype , id]); 
    
     res.json("type was updated "); 
    
        
    } catch (err) {
        console.error(err.message); 
    }
    });


////////////////////////////////////////////////
app.get("/User", async (req,res) => {
    
    try {
    const allRoles = await pool.query ("SELECT * FROM users"); 
    res.json(allRoles.rows); 
    
    }catch (err) {
        console.error(err.message); 
        
    }})
app.post("/forgot",(req,res) =>{
    const thisUser= getUser(req.body.email);
    if(thisUser){
        const id=uuidvl();
        const request={
            id,
            email: thisUser.email,
        };
        createResetRequest(request);
        sendResetLink(thisUser.email,id);
    }
    res.status(201).json();
});


app.post("/reset" , (req,res)  =>{
    const thisRequest= getReseyRequest(req.body.id);
    if (thisRequest){
        const user = getUser(thisRequest.email);
        bcrypt.hash(req.body.password,10).then(hashed =>{
            user.password=hashed ;
            updateUser(user);
            res.status(244).json();
        })
    }
    else{
        res.status(404).json();
    }
})

app.get("/simpleUser/:id", async(req, res) => {
    try {
      const {id} = req.params; 
        const simpleUser = await pool.query("SELECT * FROM simple_User WHERE id_user =$1" , 
        [id]); 
        res.json(simpleUser.rows[0]);
  
    } catch (err) {
           console.error(err.message);
    }
  
  
  })
  app.get("/simpleUsers", async(req, res) => {

    try {
        const allUtilisateur = await pool.query("SELECT * FROM Simple_User order by id_user");
        res.json(allUtilisateur.rows); 
    } catch (err) {
        console.error(err.message); 
    }
 
 
 }); 



 app.delete("/deleteUser/:id", async(req, res)=> {
    try {
        
    const {id} = req.params; 
        const deleteSimpleUser = await pool.query("DELETE FROM Simple_User WHERE  id_user = $1", [id] ); 
    res.json(" user annuler !"); 
    
    } catch (err) {
        console.error(err.message); 
    }
    
    } )







app.listen(5000,() => {
    console.log("server has started on ports 5000"); 
}); 
