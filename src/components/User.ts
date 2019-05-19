import { User } from '../models/User';
import { Request, Response } from 'express';
import {IUser, IUserDocument} from "../interfaces/user";

export class UserController {

    public postCreateNew = (req: Request, res: Response): void => {

        this.create(req.body)
            .then((createdUser: IUserDocument) => {
                res.json(createdUser);
            })
            .catch((err) => {
                res.status(503).send(err);
            })

    };

    private create = (userData: IUser): Promise<IUserDocument> => {

        return new Promise((resolve, reject) => {

            let newUser: IUserDocument = new User(userData);

            newUser.save((err, user) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(user);

            });

        })

    };

}
