import { Request, Response, NextFunction } from 'express';

import { retrieveProducts } from '../services/firestore.service'

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    let products = await retrieveProducts()

    if (products.size === 0) return res.status(404).json()

    return res.status(200).json(products.docs.map(doc =>
    ({
        'vendor': doc.id,
        ...doc.data(),
    })
    ))
};

export default { getProducts };