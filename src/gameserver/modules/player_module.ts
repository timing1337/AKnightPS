import { GetClothInfoReply, GetClothInfoRequest, GetPlayerInfoReply, GetPlayerInfoRequest } from '../../../protos/player_module';
import ByteWriting from '../../crypto/bytewriting';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('PlayerModule');

export class PlayerModule {
    @handles(ProtocolId.Login)
    public static async onRequestLogin(connection: Connection, packet: ClientPacket) {
        const [accountInfoStringLength, accountInfoString] = ByteWriting.readString(packet.data);
        const [accountTokenLength, accountToken] = ByteWriting.readString(packet.data, accountInfoStringLength + 2);
        const connectWay = packet.data.readUint8(2 + accountInfoStringLength + 2 + accountTokenLength);
        connection.logger.debug(`New connection: ${accountInfoString} | ${accountToken} | connectWay: ${connectWay}`);

        const userId = parseInt(accountInfoString.split('_').pop()!);
        const response = Buffer.alloc(10); // 2 bytes (first info is reason but i havent sure what its for so we making it empty atm)
        response.writeBigUInt64BE(BigInt(userId), 2);

        connection.initializePlayer(BigInt(userId));
        connection.sendRawBuffer(ProtocolId.Login, response);
    }

    @handles(ProtocolId.LostCmdResp)
    public static async onLostCmdResp(connection: Connection, packet: ClientPacket) {
        connection.sendRawBuffer(ProtocolId.LostCmdResp, Buffer.from('01', 'hex'));
    }

    @handles(ProtocolId.GetPlayerInfo)
    public static async onGetPlayerInfo(connection: Connection, packet: ClientPacket) {
        const request = GetPlayerInfoRequest.fromBinary(packet.data);
        const response = GetPlayerInfoReply.create({
            canRename: true,
            extRename: 0,
            mainThumbnail: false,
            openinfos: connection.player?.openInfo,
            playerInfo: connection.player?.playerInfo
        });

        connection.sendRawBuffer(ProtocolId.GetPlayerInfo, GetPlayerInfoReply.toBinary(response));
    }

    @handles(ProtocolId.GetClothInfo)
    public static async onGetClothInfo(connection: Connection, packet: ClientPacket) {
        const request = GetClothInfoRequest.fromBinary(packet.data);
        const response = GetClothInfoReply.create({
            clothInfos: {
                clothes: []
            }
        });
        connection.sendRawBuffer(ProtocolId.GetClothInfo, GetClothInfoReply.toBinary(response));
    }
}
