import {Request, Response} from "express";
import {UserController} from "../components/User";

export class Routes {

    private User: UserController = new UserController();

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send("working");
            });

        app.route('/user')
            .post(this.User.postCreateNew);

    }
}