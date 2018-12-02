export default interface IConfig {
    db: IDBConfig,
    server: IServerConfig
}

interface IDBConfig {
    dbprotocol: string;
    dbhost: string;
    dbport?: number;
    dbname: string;
    dburl?: string;
}

interface IServerConfig {
    port: number;
}