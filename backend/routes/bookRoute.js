import express from 'express';
import { Book } from '../model/book.model.js';
const router = express.Router()

router.post("/", async (req, res) => {
    try {
       if(!req.body.title || !req.body.publishYear||!req.body.author)
       {
         return res.status(404).send({
             message:"send all required fields"
         })
       }  
       const newBook= {
         title: req.body.title,
         publishYear: req.body.publishYear,
         author: req.body.author,
       }
       const book = await Book.create(newBook);
       return res.status(200).send(book);
    }
    catch (err) {
     console.log(err.message);
     res.status(500).send({message: err.message});
    }
 
 })
 router.get("/", async (req, res) => {
     try {
        const books = await Book.find({});
        return res.status(200).json({
         count:books.length,
         data:books
        });
     }
     catch (err) {
      console.log(err.message);
      res.status(500).send({message: err.message});
     }
  
  })
  router.get("/:id", async (req, res) => {
     try {
         const {id}= req.params
        const bookBYId = await Book.findById(id);
        return res.status(200).json(bookBYId);
     }
     catch (err) {
      console.log(err.message);
      res.status(500).send({message: err.message});
     }
  
  })
  router.put('/:id',async (req,res)=>{
     try{
         if(!req.body.title || !req.body.publishYear||!req.body.author)
         {
           return res.status(404).send({
               message:"send all required fields"
           })
         }
         const {id}=req.params;  
         const result = await Book.findByIdAndUpdate(id,req.body);
         if(!result)
         {
            return res.status(404).json({
             message:"Book not found"
            })
         }
         else{
             return res.status(200).json({
                 message:"Book successfully updated"
             });
         }
     }
     catch(err){
      res.status(500).send({
               message:err.message
             })
 
     }
  })
  router.delete("/:id", async (req,res)=>{
     try{
      const {id}= req.params;
      const result = await Book.findByIdAndDelete(id);
      if(!result)
      {
         res.status(404).send({
           message:"Book not found"
         })        
      } 
      else{
         res.status(200).send({message:"Book successfully deleted"})
      }
     }
     catch(err){
         res.status(500).send({
             message:err.message
           })
     }
  })
  export default router;