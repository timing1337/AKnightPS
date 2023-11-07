import { GetEquipInfoReply, GetEquipInfoRequest } from '../../../protos/equip_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('EquipModule');

export class GuideModule {
    @handles(ProtocolId.GetEquipInfo)
    public static async onGetEquipInfo(connection: Connection, packet: ClientPacket) {
        const request = GetEquipInfoRequest.fromBinary(packet.data);
        const response = GetEquipInfoReply.create({
            equips: []
        });
        connection.sendRawBuffer(ProtocolId.GetEquipInfo, GetEquipInfoReply.toBinary(response));
    }
}
