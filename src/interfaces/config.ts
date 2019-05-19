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

export enum Profiles {
    Development = 'development',
    Production = 'production',
    Staging = 'staging'
}

export interface IConfigCommon {
    profile: Profiles,
    languages: string[]
}

export interface IConfigProfile {
    db: IDBConfig,
    server: IServerConfig
}

export interface IConfig extends IConfigCommon, IConfigProfile {}
