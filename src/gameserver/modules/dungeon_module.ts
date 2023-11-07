import { InstructionDungeonInfoReply, InstructionDungeonInfoRequest } from '../../../protos/dungeon_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('DungeonModule');

export class DungeonModule {
    @handles(ProtocolId.InstructionDungeonInfo)
    public static async onInstructionDungeonInfo(connection: Connection, packet: ClientPacket) {
        const request = InstructionDungeonInfoRequest.fromBinary(packet.data);
        const response = InstructionDungeonInfoReply.create({
            
        });
        connection.sendRawBuffer(ProtocolId.InstructionDungeonInfo, InstructionDungeonInfoReply.toBinary(response));
    }
}
