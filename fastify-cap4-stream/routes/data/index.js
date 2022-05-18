// 'use strict';

// const hnLatestStream = require('hn-latest-stream');

// module.exports = async (fastify, opts) => {
//   fastify.get('/', async (request, reply) => {
//     const { amount = 10, type = 'html' } = request.query;

//     if (type === 'html') reply.type('text/html');
//     if (type === 'json') reply.type('application/json');
//     return hnLatestStream(amount, type);
//   });
// };
'use strict';

const { Buffer } = require('buffer');

module.exports = async (fastify, opts) => {
  fastify.get('/', async (request, reply) => {
    const array = ['this', 'is', 'a', 'stream', 'of', 'data']
      .map((item) => item + '<br>')
      .toString()
      .replaceAll(',', '');

    reply.statusCode = 200;
    return reply.send(array);
  });
};
