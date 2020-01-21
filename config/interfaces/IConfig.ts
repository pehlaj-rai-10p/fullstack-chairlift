export interface IConfig {
    jwtSecret: string;
    env: string;
    server: {
        port: number;
    };
    api: {
        baseURL: string;
    };
    database: {
        connectionName: string;
        databaseType: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        cacheDuration: number;
        maxQueryExecutionTime: number;
        readReplicationSlaves: string;
    };
}