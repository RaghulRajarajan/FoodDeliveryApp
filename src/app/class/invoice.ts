import { Order } from "./order";

export class Invoice {

    constructor(

        public invoiceid: number,
        public ordersdate: Date,
        public invoicetotalcost: number,
        public invoicetotalitem: number,
        public orders:Order

    ) { }
}
