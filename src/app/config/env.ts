import dotenv from "dotenv";
dotenv.config();

interface IEnvConfig {
  DB_URL: string;
}

const loadEnvVariables = (): IEnvConfig => {
  const envVariables: string[] = ["DB_URL"];
  envVariables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`unable to find ${key} variable`);
    }
  });
  return {
    DB_URL: process.env.DB_URL as string,
  };
};

export const envVars: IEnvConfig = loadEnvVariables();
