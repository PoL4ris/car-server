NODE_TLS_REJECT_UNAUTHORIZED='0'
const server = require('./server.js');

const port = process.env.PORT || 3020;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));