export interface IConfig {
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
declare const _default: IConfig;
export default _default;
