import fastify from 'fastify';
import { readFileSync } from 'fs';
import path from 'path';
import Crypto from '../crypto/decodeutils';
import { Config } from '../utils/config';
import Logger from '../utils/logger';
import accountController from './controllers/accountController';
import gameController from './controllers/gameController';

// thank you cloudyts for the http
// i hate writing http

export class HttpServer {
    static readonly Logger = new Logger('HttpServer');

    public static start() {
        const certPath = path.join(__dirname, '..', '..', 'resources', 'cert');
        const http = fastify({
            http2: true,
            https: {
                allowHTTP1: true,
                key: readFileSync(path.join(certPath, 'cert.key')),
                cert: readFileSync(path.join(certPath, 'cert.crt'))
            }
            //logger: true,
        });

        http.addContentTypeParser('application/json', { parseAs: 'buffer' }, function (req, body, done) {
            try {
                done(JSON.parse(body.toString()));
            } catch (e) {
                done(null, Crypto.decryptHttpsPostTraffic(body as Buffer).toString());
            }
        });

        http.register(accountController);
        http.register(gameController);
        http.setErrorHandler((error, request, reply) => {
            HttpServer.Logger.error(error.message + '\nStacktrace: ' + error.stack);
        });
        http.listen({
            port: Config.config.server.http.port,
            host: Config.config.server.http.bindAddress
        });
        HttpServer.Logger.log('Dispatch started.');
    }
}
