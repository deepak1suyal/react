const ideaController=require("../controler/idea.controller");
/**
 * Define route for the calls like 
 * 
 * GET 127.0.0.1:8080/ideaApp/v1/idea
 */

module.exports=(app)=>{
  app.get("/ideaApp/v1/idea",ideaController.fetchAllIdeas);  
  //Post call
  app.post("/ideaApp/v1/idea",ideaController.createIdea);
//put call
app.put("/ideaApp/v1/idea/:id",ideaController.updateIdea);
//Deleate call
app.delete("/ideaApp/v1/idea/:id",ideaController.deleteIdea);

}

