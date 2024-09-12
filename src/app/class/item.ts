export class Item {

    [x: string]: any;
    constructor(
       public itemid:number,
       public  itemname:string,
        public itemstatus:string,
        public itemcost:number,
        public itemimage:string
    ){}

}

