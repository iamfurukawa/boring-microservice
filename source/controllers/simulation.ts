import { Request, Response, NextFunction } from 'express';

import { createLimit, retrieveLimit } from '../services/firestore.service';

const getLimit = async (req: Request, res: Response, next: NextFunction) => {
    let limits = await retrieveLimit(req.params.document)

    if (limits.size === 0) {
        let initialLimit = getRndInteger(0, 80000)
        createLimit({ 'limit': initialLimit }, req.params.document)
        return res.status(200).json({ 'limit': initialLimit })
    }

    return res.status(200).json(...limits.docs.map(limit => limit.data()))
}


const getRndInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

export default { getLimit };