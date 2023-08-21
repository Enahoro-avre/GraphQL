const orders = [
  {
    date: "2005-5-23",
    subtotal: 65.64,
    items: [
      {
        product: {
          id: "red shoe",
          description: "OLD red shoe",
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};