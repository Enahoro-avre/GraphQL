const express = require("express");
const { buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders : [Order]
    }

    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`)

const root = {
  products: [
    {
      id: "red shoe",
      description: "red shoe description",
      price: 42.5,
    },
    {
      id: "blue shoe",
      description: "blue shoe description",
      price: 52.5,
    },
  ],

  orders: [
    {
        date: '2005-5-23',
        subtotal: 65.64,
        items: [
            {
                product: {
                        id: 'red shoe',
                        description: 'OLD red shoe',
                        price: 45.11

                },
                quantity:2,
            }
        ]
    }
  ]
};
const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL server is here ....");
});

app.use('/graphql' , graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
  console.log("GraphQL server running....");
});
