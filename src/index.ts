import ByteWriting from './crypto/bytewriting';
import Crypto from './crypto/decodeutils';
import GameServer from './gameserver/gameserver';
import ClientPacket from './gameserver/packet/client_packet';
import ServerPacket from './gameserver/packet/server_packet';
import { HttpServer } from './http';
import { Config } from './utils/config';
import * as zlib from 'zlib';

Config.init();
HttpServer.start();
GameServer.start();
