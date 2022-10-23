/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/proposal';
const router = express.Router();

router.post('/:document', controller.registerProposal);
router.get('/:document', controller.retrieveAllProposalsByDocument);

export = router;