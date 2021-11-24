import fastify, { FastifyInstance } from "fastify";
import fastifyCors from "fastify-cors";
import { IncomingMessage, Server, ServerResponse } from "http";
import { pino } from "pino"

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
    logger: pino({
        level: 'info',
    })
})

server.register(fastifyCors, {
    origin: [/localhost/, /.*.ngrok.io/]
});

server.listen(3000, '0.0.0.0', (err, address) => {
    if(err){
        console.log("DEBUG: error message ==", err);
        process.exit(1)
    }
    console.log("DEBUG: server listening on port == ", address)
})