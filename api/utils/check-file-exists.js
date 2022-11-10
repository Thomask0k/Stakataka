import { access, constants } from "fs/promises";

export const checkFileExists = async (file) => {
  try {
    await access(file, constants.F_OK);

    return true;
  } catch (e) {
    return false;
  }
};
