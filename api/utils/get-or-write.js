import { resolve } from "path";
import { readFile, writeFile } from "fs/promises";
import { checkFileExists } from "./check-file-exists";

export const getOrWrite = async (fileName, callback) => {
  let result;
  const path = resolve(__dirname, "..", "cache", fileName);

  if (await checkFileExists(path)) {
    result = await readFile(path, "utf-8");
  } else {
    result = await callback();

    await writeFile(path, JSON.stringify(result, null, 2));
  }

  return result;
};
