export interface ProposalList {
    'proposalList': Proposal[]
}

export interface Proposal {
    'proposalId': string,
    'vendorId': string,
    'valueContracted': number,
    'phone': string,
    'motherName': string,
    'birthDate': string,
    'salary': number,
    'zipCode': string,
    'firstInstallment': string,
    'qtyInstallments': number,
}