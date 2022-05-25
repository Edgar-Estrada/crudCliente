export class Student{
    constructor (_id='', name='', age='', status=''){
        this._id = _id;
        this.name = name;
        this.age = age;
        this.status = status;
    }

    _id:string;
    name:string;
    age:string;
    status:string;
}