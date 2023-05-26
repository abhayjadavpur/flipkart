
import { products } from "./constants/data.js";
import Product from "./models/product-schema.js";
const DefaultData = async()=>{
     try{
        await Product.insertMany(products);

     }
     catch(e){
        console.log(e.message);
     }
}
export default DefaultData;