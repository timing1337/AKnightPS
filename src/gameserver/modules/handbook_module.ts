import { GetHandbookInfoReply, GetHandbookInfoRequest } from '../../../protos/handbook_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('HandbookModule');

export class HandbookModule {
    @handles(ProtocolId.GetHandbookInfo)
    public static async onGetHandbookInfo(connection: Connection, packet: ClientPacket) {
        const request = GetHandbookInfoRequest.fromBinary(packet.data);
        const response = GetHandbookInfoReply.create({
            infos: [],
            elementInfo: []
        });
        connection.sendRawBuffer(ProtocolId.GetHandbookInfo, GetHandbookInfoReply.toBinary(response));
    }
}
