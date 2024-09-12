import { CustomerAddress } from "./customer-address";

export class Customer {

    constructor(
        public customerid: number,
        public customername: string,
        public customermobilenumber: number,
        public customeremail: string,
        public password: string,
    ) {

    }
}
