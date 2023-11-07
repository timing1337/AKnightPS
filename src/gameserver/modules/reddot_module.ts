import { GetRedDotInfosReply, GetRedDotInfosRequest } from '../../../protos/reddot_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('RedDotModule');

export class RedDotModule {
    @handles(ProtocolId.GetRedDotInfos)
    public static async onGetRedDotInfos(connection: Connection, packet: ClientPacket) {
        const request = GetRedDotInfosRequest.fromBinary(packet.data);
        const response = GetRedDotInfosReply.create({
            redDotInfos: []
        });
        connection.sendRawBuffer(ProtocolId.GetRedDotInfos, GetRedDotInfosReply.toBinary(response));
    }
}
