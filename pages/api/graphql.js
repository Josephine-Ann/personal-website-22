import Cors from 'micro-cors';
import { gql, ApolloServer } from 'apollo-server-micro';

export const config = {
  api: {
    bodyParser: false
  }
}

const friends = [
  { id: '1', name: 'Anna', job: "chef" },
  { id: '2', name: 'Ralph', job: "artist" },
  { id: '3', name: 'Jamie', job: "accountant" }
]

const typeDefs = gql`
type Friend {
    id: ID
    name: String
    job: String
}

type Query {
    friends: [Friend]
}
`

const resolvers = {
  Query: {
    friends: () => friends
  }
}

const cors = Cors()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

const serverStart = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await serverStart;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
})
// export d efault apolloServer.createHandler({ path: "/api/graphql" })