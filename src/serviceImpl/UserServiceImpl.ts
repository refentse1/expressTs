import { User } from "../entity/User";
import { UserService } from "../service/UserService";

export class UserServiceImpl implements UserService{



    public UserServiceImpl(){}

    addUser(user:User): boolean {
        throw new UserException("Error saving user.");
    }
    getUser(id: number): User {
        const user = new User();
        user.setId(id);
        return user
        // throw new UserException("Error getting user.");
    }
    getUsers(): User[] {
        throw new UserException("Error getting users.");
    }
    updateUser(user: User): boolean {
        throw new UserException("Error changing user details.");
    }
    deleteUser(id: number): boolean {
        throw new UserException("Error deleting user.");
    }
    
}