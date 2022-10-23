export interface Vendor {
    'vendorId': number,
    'products': Product[],
}

export interface Product {
    'productId': number,
    'approveRate': number,
    'minimalAge': number,
    'salaryMinimal': number,
    'gracePeriod': number,
    'taxes': number,
}