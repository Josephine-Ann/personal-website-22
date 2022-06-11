const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { typeDefs } = require('./pages/api/schemas/index')
const { resolvers } = require('./pages/api/resolvers/index')
const app = express()

module.exports = app

async function start() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    await apolloServer.applyMiddleware({ app })
    app.listen(3000, () => {
        console.log('Server on port', 3000)
    })
}

start()
