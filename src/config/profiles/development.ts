import { IConfigProfile } from '../../interfaces/config'

const development: IConfigProfile = {
    db: {
        dbprotocol	: 'mongodb',
        dbhost 		: 'localhost',
        dbport 		: 27017,
        dbname 		: 'dbname'
    },
    server: {
        port: 3000
    }
};


export default development;
