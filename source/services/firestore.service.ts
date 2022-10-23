import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    CollectionReference,
    collection,
    DocumentData,
    query,
    where,
    getDocs,
    setDoc,
    doc
} from 'firebase/firestore'

import { ProposalList } from '../business/proposal.interface';
import { Vendor } from '../business/product.interface';
import { Simulation } from '../business/simulation.interface';

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyAYfonMG-q3CG2klwwsL0du5CogZ2d4Cyg",
    authDomain: "estagio-opus.firebaseapp.com",
    projectId: "estagio-opus",
    storageBucket: "estagio-opus.appspot.com",
    messagingSenderId: "306039665683",
    appId: "1:306039665683:web:f09659bc0fe85e2958bbe6",
    measurementId: "G-EHZXNCC8K3"
})

export const firestore = getFirestore()

const PROPOSALS = 'proposals'

const PRODUCTS = 'products'

const LIMITS = 'limits'

const createCollection = <T = DocumentData>(collectionName: string) => collection(firestore, collectionName) as CollectionReference<T>

const proposalsCol = createCollection<ProposalList>(PROPOSALS)

const productsCol = createCollection<Vendor>(PRODUCTS)

const limitsCol = createCollection<Simulation>(LIMITS)

/*
    Product Repository
*/
export const retrieveProducts = async () => getDocs(query(productsCol))

/*
    Proposal Repository
*/
export const saveProposal = async (proposalList: ProposalList, document: string) => setDoc(doc(firestore, PROPOSALS, document), proposalList)

export const getProposalsByDocument = async (document: string) =>
    getDocs(query(
        proposalsCol,
        where('__name__', "==", document)
    ))

/*
    Simulation Repository
*/
export const createLimit = async (limit: Simulation, document: string) => setDoc(doc(firestore, LIMITS, document), limit)

export const retrieveLimit = async (document: string) =>
    getDocs(query(
        limitsCol,
        where('__name__', "==", document)
    ))
