import config from "../../../config/index";
import { IUser } from "./users.interface";
import { User } from "./users.model";
import { generateUserId } from "./users.utilities";


const createUser = async(user:IUser):Promise<IUser | null> =>{

    const id = await generateUserId()
    user.id = id

    if(!user.password){
        user.password = config.default_student_pass as string;
    }

    const createdUser = await User.create(user)
    if(!createdUser){
        throw new Error('Failed to create User')
    }
    return createdUser;

}
export default{createUser}