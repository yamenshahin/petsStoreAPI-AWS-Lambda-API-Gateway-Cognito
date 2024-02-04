export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify([
      {
        id: 1,
        type: 'dog',
        price: 249.99,
      },
      {
        id: 2,
        type: 'cat',
        price: 124.99,
      },
      {
        id: 3,
        type: 'fish',
        price: 0.99,
      },
    ]),
  }
  return response
}
