import { Request, Response, NextFunction } from 'express';

import { getProposalsByDocument, saveProposal, createLimit, retrieveLimit } from '../services/firestore.service';

const registerProposal = async (req: Request, res: Response, next: NextFunction) => {
    let proposals = await getProposalsByDocument(req.params.document)
    let limit = await retrieveLimit(req.params.document)
    let userLimit = limit.docs[0].data().limit

    if (userLimit < req.body.valueContracted) {
        return res.status(403).json({ 'Error': 'Proposal value contracted exceed the limit.' })
    }

    if (proposals.size === 0) {
        await saveProposal({ 'proposalList': [req.body] }, req.params.document)
    } else {
        let proposalList = proposals.docs.map(doc => doc.data())[0]
        await saveProposal({ 'proposalList': [...proposalList.proposalList, req.body] }, req.params.document)
    }

    createLimit({ 'limit': userLimit - req.body.valueContracted }, req.params.document)

    return res.status(204).json()
};

const retrieveAllProposalsByDocument = async (req: Request, res: Response, next: NextFunction) => {
    let proposals = await getProposalsByDocument(req.params.document)

    if (proposals.size === 0) return res.status(404).json()

    return res.status(200).json(...proposals.docs.map(doc => doc.data()))
}

export default { registerProposal, retrieveAllProposalsByDocument };