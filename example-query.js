// npm install @graphql-tools/schema
// install graphQL extension
// npm install @graphql-tools/load-files

// Query 1

// {
//   orders {
//     subtotal
//     items {
//       quantity
//       product {
//         id
//         price
//         reviews {
//           comment
//           rating
//         }
//       }
//     }
//   }
// }

// output 1
// {
//   "data": {
//     "orders": [
//       {
//         "subtotal": 65.64,
//         "items": [
//           {
//             "quantity": 2,
//             "product": {
//               "id": "red shoe",
//               "price": 45.11,
//               "reviews": null
//             }
//           }
//         ]
//       }
//     ]
//   }
// }


// query 2
// {
//   products {
//     description
//   }
//   orders {
//     subtotal
//     items {
//       quantity
//       product {
//         id
//         price
//         reviews {
//           comment
//           rating
//         }
//       }
//     }
//   }
// }\


// output 2
// {
//   "data": {
//     "products": [
//       {
//         "description": "red shoe description"
//       },
//       {
//         "description": "blue shoe description"
//       }
//     ],
//     "orders": [
//       {
//         "subtotal": 65.64,
//         "items": [
//           {
//             "quantity": 2,
//             "product": {
//               "id": "red shoe",
//               "price": 45.11,
//               "reviews": null
//             }
//           }
//         ]
//       }
//     ]
//   }
// }