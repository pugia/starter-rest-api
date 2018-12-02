import IConfig from '../../interfaces/config'

const production: IConfig = {
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


export default production;
