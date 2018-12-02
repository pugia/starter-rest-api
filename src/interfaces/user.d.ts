import { Document } from "mongoose";

export interface IUser {
    email?: string;
    firstName?: string;
    lastName?: string;
}

export type IUserDocument = IUser & Document;