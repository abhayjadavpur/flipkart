import Product from '../models/product-schema.js';
export const getProducts = async(req,res)=>{
     try{
        const data= await Product.find();
        if(!data)
        return res.status(404).json({message: " error in finding the products"});
        return res.status(200).json(data);
     }
     catch(e){
        console.log(e);
        return res.status(500).json({message: e.message});
     }
}
export const getProduct = async(req,res)=>{
   try{
      const id = req.params.id;
      const product = await Product.findOne({'id': id});
      if(!product){
         return res.status(404).json({error:"Product not found"})
      }
      return res.status(200).json(product);
   }catch(e){
      return res.status(500).json({error: e.message});
   }
}