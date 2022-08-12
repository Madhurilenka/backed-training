const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {

       //LOGIC WILL COME HERE
       
        let player= req.body
        let newplayerName= player.name
        let isplayerNamerepeated=false

        for ( let i=0;i<players.length;i++){
            if(players[i].name==newplayerName ){
                isplayerNamerepeated=true;
                break;
            }

        }

        if (isplayerNamerepeated ){
           res.send ("the player is alredy exist")
        }else{
            players.push( player)
                res.send(players)
            }
            
    
       res.send(  { data: players , status: true }  )
   })
  

   let person =[
    { 
        name:"PK",
        age: 10,
        votingStatus: false
    },
    
        { 
            name:"SK",
            age: 20,
            votingStatus: false
        },  
        { 
            name:"AA",
            age: 70,
            votingStatus: false
        },
        { 
            name:"SC",
            age: 5,
            votingStatus: false
        },
        { 
            name:"HO",
            age: 40,
            votingStatus: false
        },

   ]

   router.post('/VotingAge', function (req, res) {
    

    const input=req.query.input;
    const votingperson = person.filter(element=>element.age>input?element.votingStatus=true:element.votingStatus=false);
    res.send(votingperson)
   })
    

module.exports = router;

