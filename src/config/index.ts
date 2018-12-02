import development from './profiles/development';
import production from './profiles/production';
import IConfig from "../interfaces/config";

class Config {

    public config: IConfig;
    public profile: string;

    private static validProfile: Array<string> = ['development', 'production'];

    constructor() {

        this.profile = Config.validProfile.indexOf(process.env.NODE_ENV) !== -1 ? process.env.NODE_ENV : Config.validProfile[0];

        switch (this.profile) {
            case 'production':
                this.config =  Object.assign({}, production);
                break;

            default:
                this.config =  Object.assign({}, development);

        }

        this.config.db.dburl = this.config.db.dbprotocol + '://' + this.config.db.dbhost + '/' + this.config.db.dbname;

    }

}

export default new Config().config;