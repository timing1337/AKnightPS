import ByteWriting from '../../crypto/bytewriting';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger("PlayerModule");

export class PlayerModule {
    @handles(ProtocolId.Login)
    public static async onRequestLogin(connection: Connection, packet: ClientPacket){
        const [accountInfoStringLength, accountInfoString] = ByteWriting.readString(packet.data);
        const [accountTokenLength, accountToken] = ByteWriting.readString(packet.data, accountInfoStringLength + 2);
        const connectWay = packet.data.readUint8(2 + accountInfoStringLength + 2 + accountTokenLength);
        connection.logger.debug(`New connection: ${accountInfoString} | ${accountToken} | connectWay: ${connectWay}`);

        const userId = parseInt(accountInfoString.split("_").pop()!);
        const response = Buffer.alloc(10); // 2 bytes (first info is reason but i havent sure what its for so we making it empty atm)
        response.writeBigUInt64BE(BigInt(userId), 2);

        connection.sendRawBuffer(ProtocolId.Login, response);
    }
}
