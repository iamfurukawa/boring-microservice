/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/products';
const router = express.Router();

router.get('/', controller.getProducts);

export = router;