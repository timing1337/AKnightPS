import { GetCurrencyListReply, GetCurrencyListRequest } from '../../../protos/currency_module';
import { OpenInfo } from '../../../protos/open_module';
import { PlayerInfo } from '../../../protos/player_def';
import { GetPlayerInfoReply, GetPlayerInfoRequest } from '../../../protos/player_module';
import ByteWriting from '../../crypto/bytewriting';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('CurrencyModule');

export class PlayerModule {
    @handles(ProtocolId.GetCurrencyList)
    public static async onGetCurrencyList(connection: Connection, packet: ClientPacket) {
        const request = GetCurrencyListRequest.fromBinary(packet.data);
        const response = GetCurrencyListReply.create({
            currencyList: request.currencyIds
        })
    }
}
