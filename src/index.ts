import GameServer from './gameserver/gameserver';
import ClientPacket from './gameserver/packet/client_packet';
import ServerPacket from './gameserver/packet/server_packet';
import { HttpServer } from './http';
import { Config } from './utils/config';
Config.init();
HttpServer.start();
GameServer.start();