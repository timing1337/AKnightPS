import { GetItemListReply, GetItemListRequest } from '../../../protos/item_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('MaterialModule');

export class MaterialModule {
    @handles(ProtocolId.GetItemList)
    public static async onGetItemList(connection: Connection, packet: ClientPacket) {
        const request = GetItemListRequest.fromBinary(packet.data);
        const response = GetItemListReply.create({
            items: [],
            powerItems: []
        });
        connection.sendRawBuffer(ProtocolId.GetItemList, GetItemListReply.toBinary(response));
    }
}
