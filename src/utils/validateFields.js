export const validateFields = (password, confirmPassword) => {
  const validatePassword = password === confirmPassword;
  return validatePassword;
};
