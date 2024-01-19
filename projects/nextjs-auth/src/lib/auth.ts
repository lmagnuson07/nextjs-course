const bcrypt = require('bcryptjs');

export async function hashPassword(password: string) {
  let salt = bcrypt.genSaltSync(12);
  return bcrypt.hashSync(password, salt);
}
