

export class Order {
    constructor(
        public ordersid:number,
        public status:string,
        public restid:number,
        public itemid:any,
        public customerid:number,
        public foodCart_Id:number,
        public orderDate:Date,
        public intitalQuantity:number
    ){}
}
