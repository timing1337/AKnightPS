import Logger from '../utils/logger';
import net from 'net';
import ClientPacket from './packet/client_packet';
import HandlerFactory from './handlers';
import { ProtocolId } from './protocol_id';
import ServerPacket from './packet/server_packet';

export default class Connection {
    public readonly logger: Logger;

    constructor(public readonly socket: net.Socket, public readonly address: net.AddressInfo) {
        this.logger = new Logger(`Connection<${address.address}:${address.port}>`);
        this.socket.on('data', this.onReceived.bind(this));
    }

    private onReceived(msg: Buffer) {
        const packet = ClientPacket.decode(msg);
        this.logger.debug(`CLIENT > Receiving ${msg.toString('hex')}`)
        HandlerFactory.handle(this, packet);
    }

    public sendRawBuffer(cmd: ProtocolId, buffer: Buffer, resultCode: number = 0){
        const serverPacket = new ServerPacket(cmd, resultCode, 255, 255, buffer);
        const encoded = serverPacket.encode();
        this.logger.debug(`SERVER < Sending ${encoded.toString('hex')}`)
        this.socket.write(encoded);
    }
}
