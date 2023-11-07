import { GetServerTimeReply, GetServerTimeRequest } from '../../../protos/common_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('CommonModule');

export class CommonModule {
    @handles(ProtocolId.GetServerTime)
    public static async onGetServerTime(connection: Connection, packet: ClientPacket) {
        const request = GetServerTimeRequest.fromBinary(packet.data);
        const response = GetServerTimeReply.create({
            serverTime: BigInt(Date.now()) //not sure
        });
        connection.sendRawBuffer(ProtocolId.GetServerTime, GetServerTimeReply.toBinary(response));
    }
}
