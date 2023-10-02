import "dotenv/config";

export default {
	dbUrl: createDatabaseUrl(),
	logLevel: process.env.LOG_LEVEL ?? "info",
	port: parseInt(process.env.PORT ?? "3000", 10),
	production: process.env.NODE_ENV === "production",
	client_id: process.env.CLIENT_ID,
	client_secret: process.env.CLIENT_SECRET,
	client_key: process.env.CLIENT_KEY,
	cookie_secret: process.env.COOKIE_SECRET,
};

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
    
    // Check if REQUIRE_SSL is set to 'true' (string), otherwise do not include the sslmode parameter
    const sslmode = process.env.REQUIRE_SSL === 'true' ? '?sslmode=require' : '';
    return `postgres://${userinfo !== ":" ? `${userinfo}@` : ""}${host}:${port}/${name}${sslmode}`;
}

  