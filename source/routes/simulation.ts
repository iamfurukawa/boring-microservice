/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/simulation';
const router = express.Router();

router.get('/:document', controller.getLimit);

export = router;