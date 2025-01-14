import "dotenv/config";

function createDatabaseUrl() {
    if (process.env.DATABASE_URL) {
        return process.env.DATABASE_URL;
    }
    const host = process.env.DB_HOST ?? "localhost";
    const name = process.env.DB_NAME ?? "cyf";
    const password = process.env.DB_PASS ?? process.env.DB_PASSWORD ?? "";
    const port = process.env.DB_PORT ?? "5432";
    const username = process.env.DB_USER ?? process.env.DB_USERNAME ?? "";
    const userinfo = `${username}:${password}`;
    return `postgres://${userinfo !== ":" ? `${userinfo}@` : ""}${host}:${port}/${name}`;
}

const port = parseInt(process.env.PORT ?? "3000", 10);
if (isNaN(port) || port <= 0) {
  throw new Error('Invalid or missing PORT environment variable');
}

export default {
    dbUrl: createDatabaseUrl(),
    logLevel: process.env.LOG_LEVEL ?? "info",
    port: port,
    production: process.env.NODE_ENV === "production",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    client_key: process.env.CLIENT_KEY,
    cookie_secret: process.env.COOKIE_SECRET,
};
