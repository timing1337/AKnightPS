import Logger from '../utils/logger';
import Connection from './connection';
import ClientPacket from './packet/client_packet';
import { ProtocolId } from './protocol_id';

type PacketHandler = (client: Connection, packet: ClientPacket) => void;

export default class HandlerFactory {
    private static logger: Logger = new Logger('HandlerFactory');
    private static handlers: Map<ProtocolId, PacketHandler> = new Map<ProtocolId, PacketHandler>();

    public static registerHandler(cmd: ProtocolId, handler: PacketHandler) {
        this.handlers.set(cmd, handler);
        HandlerFactory.logger.log(`Registered handler ${ProtocolId[cmd]}`);
    }

    public static handle(connection: Connection, packet: ClientPacket) {
        if (!this.handlers.has(packet.cmdId)) {
            HandlerFactory.logger.warn(`${ProtocolId[packet.cmdId] ?? packet.cmdId} is not handled`);
            return;
        }
        this.handlers.get(packet.cmdId)!(connection, packet);
    }
}
