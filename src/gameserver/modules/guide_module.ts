import { GetGuideInfoReply, GetGuideInfoRequest } from '../../../protos/guide_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('GuideModule');

export class GuideModule {
    @handles(ProtocolId.GetGuideInfo)
    public static async onGetGuideInfo(connection: Connection, packet: ClientPacket) {
        const request = GetGuideInfoRequest.fromBinary(packet.data);
        const response = GetGuideInfoReply.create({
            guideInfos: []
        });
        connection.sendRawBuffer(ProtocolId.GetGuideInfo, GetGuideInfoReply.toBinary(response));
    }
}
