import { IConfigProfile} from "../../interfaces/config";

const staging: IConfigProfile = {
    db: {
        dbprotocol	: 'mongodb',
        dbhost 		: 'localhost',
        dbport 		: 27017,
        dbname 		: 'dbname'
    },
    server: {
        port: 80
    }
};

export default staging;
