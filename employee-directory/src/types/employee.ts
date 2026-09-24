export interface employee {
    id:number;
    name : string;
    email : string;
    phone : number;
    address : {
        street : string;
        suite : string;
        city : string;
        zipcode : number
    }
}