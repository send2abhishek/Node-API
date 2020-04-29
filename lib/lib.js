const data = (num) => {
  if (num > 0) return num;
  if (num < 0) return -num;
  return 0;
};

const greet = (name) => {
  return `Welcome ${name} !`;
};

const getCurrencies = () => {
  return ["INR", "USD", "EUR"];
};

const getProduct = () => {
  return { id: 1, product: "Abhishek Aryan", desc: "very good", size: 10 };
};

const getUser = (userName) => {
  if (!userName) {
    throw new Error("username not present");
  }

  return { id: 1, product: "Abhishek Aryan" };
};

module.exports = {
  testData: data,
  greet,
  getCurrencies,
  getProduct,
  getUser,
};
