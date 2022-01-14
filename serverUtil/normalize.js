export const modify__email = (email) => {
  let regexReplace = /\./;
  email = email.replace(regexReplace, "_");
  return email;
};

export const nomalize__email = (email) => {
  let regexReplace = /\_/;
  email = email.replace(regexReplace, ".");
  return email;
};
