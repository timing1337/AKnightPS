import { FastifyInstance } from 'fastify';

export default async function gameController(fastify: FastifyInstance) {
    fastify.get('/patch/:id/version', async (request, reply) => {
        reply.code(200).send(JSON.stringify({ latestVersion: '100.0.125', appStatus: 0, loginUri: '', loginUriBak: '' }));
    });

    fastify.get('/noticecp/client/query', async (request, reply) => {
        reply.code(200).send(
            JSON.stringify({
                code: 200,
                msg: '成功',
                data: []
            })
        );
    });
}
