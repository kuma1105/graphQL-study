import { ApolloServer, gql } from "apollo-server";


// GET /text
// GET /hello
// 사용자가 request 할 수 있도록 하고 싶은 모든 건 뭐든지 type Query 안에 있어야 한다.
const typeDefs = gql`
    type Query {
        text: String
        hello: String
    }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
})