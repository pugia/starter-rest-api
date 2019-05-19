import _common from './profiles/_common';
import development from './profiles/development';
import production from './profiles/production';
import staging from './profiles/staging';
import { IConfig, Profiles } from "../interfaces/config";

class Config {

    public config: IConfig;

    constructor() {

        switch (process.env.NODE_ENV) {
            case Profiles.Production:
                this.config =  Object.assign({}, _common, production);
                this.config.profile = Profiles.Production;
                break;

            case Profiles.Staging:
                this.config =  Object.assign({}, _common, staging);
                this.config.profile = Profiles.Staging;
                break;

            default:
                this.config =  Object.assign({}, _common, development);
                this.config.profile = Profiles.Development;
        }

        this.config.db.dburl = this.config.db.dbprotocol + '://' + this.config.db.dbhost + '/' + this.config.db.dbname;

    }

}

export default new Config().config;
