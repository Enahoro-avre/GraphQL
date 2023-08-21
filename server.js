const path = require('path')
const express = require("express");
// const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const { loadFilesSync } = require("@graphql-tools/load-files")
const { makeExecutableSchema } = require("@graphql-tools/schema")

const typesArray = loadFilesSync(path.join(__dirname , '**/*.graphql'))
const resolverArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolverArray,
})

// const schema = buildSchema()

// const root = {
//     products: require('./products/products.model'),
//     orders: require('./orders/orders.model')
// };

const app = express()

app.get("/", (req, res) => {
  res.send("GraphQL server is here ....");
});

app.use('/graphql' , graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
  console.log("GraphQL server running....");
});
