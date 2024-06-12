export class User{
    private id:number;
    private name:string;
    private surname:string;
    private age:number; 


    public setId(id:number):void{
        this.id = id;
    }

    public getId():number{
        return this.id;
    }

    public setName(name:string){
        this.name = name;
    }

    public getName():string{
        return this.name;
    }

    public setSurname(surname:string){
        this.surname = surname;
    }

    public getSurname():string{
        return this.surname;
    }

    public setAge(age:number){
        this.age = age;
    }

    public getAge(){
        return this.age;
    }

}