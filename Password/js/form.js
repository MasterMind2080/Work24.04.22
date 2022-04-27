/* form.js */

export function isPasswordValid(password) {
  console.log(password.trim())
  password = password.replace(/\s+/g, '');
  return password.length >= 10
}
