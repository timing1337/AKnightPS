import { FastifyInstance } from 'fastify';
import Crypto from '../../crypto/decodeutils';
import { Config } from '../../utils/config';

export default async function accountController(fastify: FastifyInstance) {
    fastify.post('/sdk/init', async (request, reply) => {
        const traffic = {
            code: 200,
            msg: 'success',
            data: {
                loginAccountTypes: [1, 5, 10, 11, 12, 13, 14],
                userCenterItems: [
                    {
                        type: 1,
                        labTitle: '账号管理'
                    },
                    {
                        type: 2,
                        labTitle: '客服'
                    },
                    {
                        type: 3,
                        labTitle: '隐私条约'
                    },
                    {
                        type: 4,
                        labTitle: '账号注销'
                    }
                ],
                onlyMail: false,
                gameChannel: {
                    gameId: 60001,
                    channelId: 200,
                    cpName: '重返未来：1999',
                    appId: '1',
                    appKey: '1',
                    callInterval: 600,
                    reloginInterval: 60,
                    reloginTimes: 5,
                    isRecordDebug: false
                },
                bizSwitch: {
                    openRealNameWindow: false,
                    forceRealNameAuth: false
                },
                isDownloadService: true
            }
        };
        reply.code(200).send(Crypto.encryptHttpsPostTraffic(Buffer.from(JSON.stringify(traffic), 'utf-8')));
    });

    fastify.post('/login/autologin', async (request, reply) => {
        const traffic = {
            code: 200,
            msg: 'success',
            data: {
                token: 'timing@crepe.moe',
                expiresIn: 0,
                refreshToken: 'null',
                userId: 1337,
                accountType: 10,
                registrationAccountType: 10,
                account: 'timing@crepe.moe',
                realNameInfo: { needRealName: false, realNameStatus: true, age: 18, adult: true },
                needActivate: false,
                cipherMark: true,
                firstJoin: false,
                accountTags: ''
            }
        };
        reply.code(200).send(Crypto.encryptHttpsPostTraffic(Buffer.from(JSON.stringify(traffic), 'utf-8')));
    });
    fastify.post('/uidAccount/bindList', async (request, reply) => {
        const traffic = {
            code: 200,
            msg: 'success',
            data: [{ userId: 1337, account: 'timing@crepe.moe', accountType: 10 }]
        };
        reply.code(200).send(Crypto.encryptHttpsPostTraffic(Buffer.from(JSON.stringify(traffic), 'utf-8')));
    });

    fastify.post('/login/verify', async (request, reply) => {
        const traffic = {
            code: 200,
            msg: 'success',
            data: {
                userInfo: {
                    channelId: 200,
                    userId: '200_1337', //200_uid
                    realNameStatus: false,
                    age: 0,
                    adult: false,
                    firstJoin: false,
                    accountTags: '',
                    bindAccountTypeList: [10],
                    firstJoinTime: '2023-11-03 01:02:53',
                    registerTime: '2023-11-03 01:02:50',
                    isPayAccount: false
                },
                sessionId: 'null',
                token: 'null',
                expiresIn: 0,
                refreshToken: 'null'
            }
        };
        reply.code(200).send(Crypto.encryptHttpsPostTraffic(Buffer.from(JSON.stringify(traffic), 'utf-8')));
    });

    fastify.get('/login.jsp', async (request, reply) => {
        console.log(request.body);
        reply.code(200).send(
            JSON.stringify({
                accountTags: '',
                areaId: 4,
                isAdmin: false,
                resultCode: 0,
                sessionId: 'null',
                userName: '200_200_1337', //200_2000_uid
                zoneInfo: { default: true, id: 4, name: 'GL', prefix: '', state: 1 }
            })
        );
    });

    fastify.get('/loadzone.jsp', async (request, reply) => {
        reply.code(200).send(
            JSON.stringify({
                lastLoginZoneId: 4,
                recommendZoneId: 4,
                resultCode: 0,
                userInfos: [
                    {
                        id: 4,
                        level: 9,
                        name: 'timing@crepe.moe',
                        portrait: 170001
                    }
                ],
                zoneInfos: [
                    {
                        default: true,
                        prefix: '',
                        name: 'GL',
                        id: 4,
                        state: 1
                    }
                ]
            })
        );
    });

    fastify.get('/startgame.jsp', async (request, reply) => {
        reply.code(200).send(
            JSON.stringify({
                bakIp: Config.config.server.gameServer.bindAddress,
                bakPid: 2,
                bakPort: Config.config.server.gameServer.port,
                ip: Config.config.server.gameServer.bindAddress,
                isAdmin: false,
                pid: 1, //?
                port: Config.config.server.gameServer.port,
                resultCode: 0,
                state: 1,
                tips: 'Server will officially launch at October 26th, 07:00 (UTC-5). Thanks for your patience.'
            })
        );
    });
}
