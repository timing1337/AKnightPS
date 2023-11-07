import { ClientStatBaseInfoReply, ClientStatBaseInfoRequest, UpdateClientStatBaseInfoReply, UpdateClientStatBaseInfoRequest } from '../../../protos/stats_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('StatsModule');

export class StatsModule {
    @handles(ProtocolId.UpdateClientStatBaseInfo)
    public static async onUpdateClientStatBaseInfo(connection: Connection, packet: ClientPacket) {
        const request = UpdateClientStatBaseInfoRequest.fromBinary(packet.data);
        const response = UpdateClientStatBaseInfoReply.create({
            accountBindBonus: 0
        });
        connection.sendRawBuffer(ProtocolId.UpdateClientStatBaseInfo, UpdateClientStatBaseInfoReply.toBinary(response));
    }

    @handles(ProtocolId.ClientStatBaseInfo)
    public static async onClientStatBaseInfo(connection: Connection, packet: ClientPacket) {
        const request = ClientStatBaseInfoRequest.fromBinary(packet.data);
        const response = ClientStatBaseInfoReply.create({});
        connection.sendRawBuffer(ProtocolId.ClientStatBaseInfo, ClientStatBaseInfoReply.toBinary(response));
    }
}
