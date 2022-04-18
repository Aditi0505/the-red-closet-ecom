export const validateFields = (email, password, confirmPassword) => {
  const validatePassword = password === confirmPassword;
  return validatePassword;
};
