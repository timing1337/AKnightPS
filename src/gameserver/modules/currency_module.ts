import { Currency, GetCurrencyListReply, GetCurrencyListRequest } from '../../../protos/currency_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('CurrencyModule');

export class CurrencyModule {
    @handles(ProtocolId.GetCurrencyList)
    public static async onGetCurrencyList(connection: Connection, packet: ClientPacket) {
        const request = GetCurrencyListRequest.fromBinary(packet.data);
        const response = GetCurrencyListReply.create({
            currencyList: request.currencyIds.map((id) => {
                return Currency.create({
                    currencyId: id,
                    quantity: 13371337
                });
            })
        });
        connection.sendRawBuffer(ProtocolId.GetCurrencyList, GetCurrencyListReply.toBinary(response));
    }
}
