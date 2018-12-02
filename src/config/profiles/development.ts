import IConfig from '../../interfaces/config'

const development: IConfig = {
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
