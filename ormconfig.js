let baseDir = '';
if (process.env.NODE_ENV === 'development') {
	baseDir = 'src';
} else if (process.env.NODE_ENV === 'production') {
	baseDir = 'dist';
}

module.exports = {
	type: 'postgres',
	host: process.env.DATABASE_LINK || 'localhost',
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	port: process.env.DATABASE_HOST_PORT,
	migrations: [`${baseDir}/database/migrations/*{.ts,.js}`],
	entities: [`${baseDir}/entities/*{.ts,.js}`],
	cli: {
		migrationsDir: `${baseDir}/database/migrations`,
		entitiesDir: `${baseDir}/entities`,
	},
};
