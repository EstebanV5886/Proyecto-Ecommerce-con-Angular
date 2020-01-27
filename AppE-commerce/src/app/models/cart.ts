import { Producto } from './producto';

export class Cart{

    constructor(

        public items: Producto,    
        public qty: number,
        public totalQty: number,
        public price: number,
        public totalPrice: number
        
    ){
      
    }

    
    
}