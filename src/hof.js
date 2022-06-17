export const withErrorHandler = (fn) => {
  try {
    fn();
  } catch (error) {
    console.log("Error caught ", error);
  }
};

const divide = () => {
  a.map();
};

withErrorHandler(divide);
