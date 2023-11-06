import fs from 'fs';
import path from 'path';
import Logger from './logger';

export class Config {
    private static logger = new Logger('Config');

    private static _configPath = path.join(__dirname, '../..', 'config.json');

    static config: ConfigType = Config.getDefaultConfig();

    static init() {
        this.logger.log('Loading config');

        // Check config exist
        if (fs.existsSync(this._configPath)) {
            this.config = JSON.parse(fs.readFileSync(this._configPath, 'utf-8'));
        } else {
            // Create new config file with default
            this.createDefaultConfigFile();
        }
    }

    private static createDefaultConfigFile() {
        this.logger.log('Config file not found! Create new config file.');

        // Write to file
        fs.writeFileSync(this._configPath, JSON.stringify(this.getDefaultConfig(), null, 4));
    }

    private static getDefaultConfig() {
        return {
            server: {
                http: {
                    bindAddress: '0.0.0.0',
                    port: 443
                },
                gameServer: {
                    bindAddress: '127.0.0.1',
                    port: 22102
                }
            }
        } as ConfigType;
    }
}

export type ConfigType = {
    server: {
        http: {
            bindAddress: string;
            port: number;
        };
        gameServer: {
            bindAddress: string;
            port: number;
        };
    };
};
