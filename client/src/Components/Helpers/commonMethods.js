import { EncryptStorage } from "encrypt-storage";
let options = {
  stateManagementUse: true,
};
export const encryptStorage = new EncryptStorage("secret_key", options);
