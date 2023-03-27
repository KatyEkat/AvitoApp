export const maskPhoneNumber = (phoneNumber) => {
  return phoneNumber.slice(0, -7) + "XXX XX XX";
};

