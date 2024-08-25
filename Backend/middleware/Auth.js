const jwt = require("jsonwebtoken");
const Auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const verified = jwt.verify(token, "dummy text"); 
    req.user = verified; 
    next();
  }
  catch (err) {
    res.json({ msg: "Invalid Token" });
  }
};
module.exports = Auth;