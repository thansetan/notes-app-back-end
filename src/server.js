const hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = hapi.server({
        host: 'localhost',
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
