import type { employee } from "../types/employee";
import axios from 'axios';
 
 
export async function getEmployee() : Promise<employee[]>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}