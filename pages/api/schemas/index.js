import { gql } from "apollo-server-express";


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
module.exports = { typeDefs }

// const friend = {
//     name
// }
