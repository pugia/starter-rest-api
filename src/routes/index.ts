import {Request, Response} from "express";
import {UserController} from "../components/User";

export class Routes {
	
	private User: UserController = new UserController();
	
	public routes(app): void {
		
		/**
		 * @swagger
		 * /:
		 *   get:
		 *     description: Returns the homepage
		 *     responses:
		 *       200:
		 *         description: working
		 */
		app.route('/')
			.get((req: Request, res: Response) => {
				res.status(200).send("working");
			});
		
		/**
		 * @swagger
		 * /user:
		 *   post:
		 *     description: Returns the homepage
		 *     responses:
		 *       200:
		 *         description: working
		 */
		app.route('/user')
			.post(this.User.postCreateNew);
		
	}
}
