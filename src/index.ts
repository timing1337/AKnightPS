import GameServer from './gameserver/gameserver';
import { HttpServer } from './http';
import { Config } from './utils/config';
Config.init();
HttpServer.start();
GameServer.start();
