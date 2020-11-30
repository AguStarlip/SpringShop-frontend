interface _CategoryUser{
    _id: string;
    name: string;
    img: string;
}

export class Category{
    constructor(
        public _id: string,
        public description: string,
        public user: _CategoryUser
    ){}
}
