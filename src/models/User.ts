import { Schema, Model, model} from "mongoose";
import { IUserDocument } from "../interfaces/user";

// export interface IUserModel extends IUser, Document {}

export var UserSchema: Schema = new Schema({
    email: String,
    firstName: String,
    lastName: String
},{
    timestamps: true
});

export const User: Model<IUserDocument> = model<IUserDocument>("User", UserSchema);
