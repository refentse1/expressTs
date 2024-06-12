import { User } from "../entity/User";

export interface UserService{
    addUser(user:User):boolean;
    getUser(id:number):User;
    getUsers():User[];
    updateUser(user:User):boolean;
    deleteUser(id:number):boolean;
}