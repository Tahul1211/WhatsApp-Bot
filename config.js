require('dotenv').config();

const toBool = (x) => x == 'true'
module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'RAHUL-MD~UdogFRYZ#iBtp8agGZXC0qgfi_lGMV9kQ0A5-P6y3lhF4SuD7u0E',
  HANDLERS: (process.env.HANDLERS || '^[.,!]').trim(),
  MODE: (process.env.MODE || 'public').toLowerCase(),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  READ_CMD: toBool(process.env.READ_CMD),
  READ_MSG: toBool(process.env.READ_MSG),
  SUDO: process.env.SUDO || '',
};
