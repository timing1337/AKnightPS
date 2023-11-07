import { HeroInfoListReply, HeroInfoListRequest } from '../../../protos/hero_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('HeroModule');

export class HeroModule {
    @handles(ProtocolId.HeroInfoList)
    public static async onHeroInfoList(connection: Connection, packet: ClientPacket) {
        const request = HeroInfoListRequest.fromBinary(packet.data);
        const response = HeroInfoListReply.create({
            heros: [{}]
        });
        connection.sendRawBuffer(ProtocolId.GetAllMails, HeroInfoListReply.toBinary(response));
    }
}
