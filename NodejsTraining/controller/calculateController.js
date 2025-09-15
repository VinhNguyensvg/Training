const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

exports.addition = async (req, res) => {
  try {
    const num = await req.body;
    const result = add(num.a, num.b);
    res.json({
      success: true,
      data: result,
      message: "Addition successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
exports.subtract = async (req, res) => {
  try {
    const num = await req.body;
    const result = sub(num.a, num.b);
    res.json({
      success: true,
      data: result,
      message: "Subtraction successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
exports.multiply = async (req, res) => {
  try {
    const num = await req.body;
    const result = mul(num.a, num.b);
    res.json({
      success: true,
      data: result,
      message: "Multiply successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
exports.division = async (req, res) => {
  try {
    const num = await req.body;
    const result = div(num.a, num.b);
    res.json({
      success: true,
      data: result,
      message: "Division successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
