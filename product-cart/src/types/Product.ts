export type Product={
    id:number;
    name:string;
    price:number;
}

export type CartItem = {
  product: Product;
  quantity: number;
};