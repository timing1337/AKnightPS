import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default async function indexController(fastify: FastifyInstance) {
    fastify.get('/', defaultResponse);
    fastify.get('/favicon.ico', defaultResponseImg);
}

async function defaultResponseImg(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    reply.type('image/x-icon').code(200).send('sex!');
}

async function defaultResponse(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    reply.code(200).send('yay');
}
