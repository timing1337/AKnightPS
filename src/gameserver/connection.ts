import net from 'net';
import Logger from '../utils/logger';
import Player from './game/player';
import HandlerFactory from './handlers';
import ClientPacket from './packet/client_packet';
import ServerPacket from './packet/server_packet';
import { ProtocolId } from './protocol_id';

export default class Connection {
    public readonly logger: Logger;
    public player?: Player;

    constructor(public readonly socket: net.Socket, public readonly address: net.AddressInfo) {
        this.logger = new Logger(`Connection<${address.address}:${address.port}>`);
        this.socket.on('data', this.onReceived.bind(this));
    }

    public initializePlayer(userId: bigint) {
        this.player = new Player(this, userId);
    }

    private async onReceived(msg: Buffer) {
        try {
            /*
            hacky as shit
            todo: rewrite this
            */
            while (msg.length > 0) {
                const packetSize = msg.readUInt32BE();
                const packet = ClientPacket.decode(msg.subarray(0, 4 + packetSize));
                this.logger.debug(`SERVER < Receiving ${packet.cmdId} ${packet.data.length > 0 ? '| ' + packet.data.toString('hex') : ''}`);
                HandlerFactory.handle(this, packet);
                msg = msg.subarray(4 + packetSize, msg.length);
            }
        } catch (error) {
            this.logger.error(error);
        }
    }

    public sendRawBuffer(cmd: ProtocolId, buffer: Buffer | Uint8Array, resultCode: number = 0) {
        const serverPacket = new ServerPacket(cmd, resultCode, 0, 0, Buffer.from(buffer));
        const encoded = serverPacket.encode();
        this.logger.debug(`SERVER < Sending ${encoded.toString('hex')}`);
        this.socket.write(encoded);
    }
}
