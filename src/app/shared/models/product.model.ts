import { Category } from './category.model';

interface _ProductUser{
    _id: string;
    name: string;
    img: string;
}

export class Product{
    constructor(
        public name: string,
        public unitPrice: number,
        public stock: boolean,
        public category: Category,
        public _id?: string,
        public brand?: string,
        public img?: string,
        public description?: string,
        public user?: _ProductUser
    ){}
}