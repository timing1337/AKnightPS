import { PartialMessage } from '@protobuf-ts/runtime';
import { OpenInfo } from '../../../protos/open_module';
import { PlayerInfo } from '../../../protos/player_def';
import Connection from '../connection';

export default class Player {
    public playerInfo: PlayerInfo = PlayerInfo.create();
    public openInfo: PartialMessage<OpenInfo>[] = [];

    constructor(readonly connection: Connection, userId: bigint) {
        this.playerInfo.userId = userId;
    }
}
