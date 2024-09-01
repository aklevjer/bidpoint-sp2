export function isEmailValid(email) {
  const emailPattern = /^[\w\-.]+@stud\.noroff\.no$/;
  return emailPattern.test(email);
}
