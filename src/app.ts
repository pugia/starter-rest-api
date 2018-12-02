import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import * as mongoose from "mongoose";
import config from "./config";

class App {

    public app: express.Application;
    public router: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.router.routes(this.app);
        this.setupMongodb();
    };

    private config = (): void => {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };

    private setupMongodb = (): void => {
        mongoose.connect(config.db.dburl,  { useNewUrlParser: true })
            .then(() => {
                const db = mongoose.connection;
                db.on('error', console.error.bind(console, 'DB: connection error:'));
                db.once('open', () => {
                    console.log('DB: open');
                });
            })
            .catch((error) => {
                console.error('DB: connection error:');
                console.error(error);
            })
    };

}

export default new App().app;