import fs from 'fs';
import net from 'net';
import path from 'path';
import { Config } from '../utils/config';
import Logger from '../utils/logger';
import Connection from './connection';
import HandlerFactory from './handlers';
import { ProtocolId } from './protocol_id';

export default class GameServer {
    public static logger: Logger = new Logger('GameServer');
    public static readonly server: net.Server = net.createServer();
    public static connections: Map<net.AddressInfo, Connection> = new Map();

    public static start() {
        GameServer.server.listen(Config.config.server.gameServer.port, Config.config.server.gameServer.bindAddress, () => GameServer.logger.start('Starting gameserver.'));

        fs.readdirSync(path.join(__dirname, './modules')).forEach((file) => {
            if (file.endsWith('.ts')) {
                import(path.join(__dirname, './modules', file));
            }
        });

        GameServer.server.on('connection', function (socket) {
            const address = socket.address() as net.AddressInfo;
            const connection = new Connection(socket, address);
            GameServer.connections.set(address, connection);
            socket.on('close', () => GameServer.connections.delete(address));
        });
    }

    public static send(buffer: Buffer, connetion: Connection) {}
}

// decorator
function handles(type: ProtocolId) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        HandlerFactory.registerHandler(type as ProtocolId, descriptor.value);
    };
}

export { handles };
