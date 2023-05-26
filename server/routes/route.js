import express from 'express';
import { getProducts, getProduct} from '../controller/product-controller.js';
import { userSignUp, userLogin } from '../controller/user-controller.js';
const Router= express.Router();

Router.post('/signup',userSignUp);
Router.post('/login',userLogin);
Router.get('/products', getProducts);
Router.get('/product/:id',getProduct);
export default Router;