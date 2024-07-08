
const idea =require("../modles/idea.model");

/*Search all idea*/

exports.fetchAllIdeas =(req,res)=>{
res.status(200).send(idea);
}


/*Creat all idea*/
 let id=1;
exports.createIdea=(req,res)=>{
    //Read the request body 
   const ide=req.body;
    //Needto generate the next idea id
    ide.id=++id;
    //Save it in the list of existing idea
idea[id]=ide;
    //return the response
    res.status(201).send(idea[id]);
}


/*Update all idea*/
exports.updateIdea=(req,res)=>{
// Need to read the id passed in the path
//127.0.0.1:8080/ideaApp/v1/idea/1
const ideaid=req.params.id;
//if the idea is present - modify else return error
if(idea[ideaid]){
    
    idea[ideaid]=req.body;
res.status(200).send(idea[ideaid]);
}
else{
    res.status(400).send({message:'idea id not match'});
}


}


/*Deleat all idea*/

exports.deleteIdea=(req,res)=>{
    //Check if present
    if(idea[req.params.id]){
        delete idea[req.params.id];
        res.status(200).send({message:'deleated'});
    }
    else{
        res.status(400).send({message:'idea id not match'});
    }
}



