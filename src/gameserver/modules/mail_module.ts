import { GetAllMailsReply, GetAllMailsRequest } from '../../../protos/mail_module';
import Logger from '../../utils/logger';
import Connection from '../connection';
import { handles } from '../gameserver';
import ClientPacket from '../packet/client_packet';
import { ProtocolId } from '../protocol_id';

const logger = new Logger('MailModule');

export class MailModule {
    @handles(ProtocolId.GetAllMails)
    public static async onGetAllMails(connection: Connection, packet: ClientPacket) {
        const request = GetAllMailsRequest.fromBinary(packet.data);
        const response = GetAllMailsReply.create({
            mails: []
        });
        connection.sendRawBuffer(ProtocolId.GetAllMails, GetAllMailsReply.toBinary(response));
    }
}
