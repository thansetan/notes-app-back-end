const hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = hapi.server({
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        port: 5000,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    })
    await server.start()
    server.route(routes)
    console.log(`Server berjalan di${server.info.uri}`)
}
init()
