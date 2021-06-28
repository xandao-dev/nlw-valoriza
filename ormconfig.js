let baseDir = '';
if (process.env.NODE_ENV === 'development') {
	baseDir = 'src';
} else if (process.env.NODE_ENV === 'production') {
	baseDir = 'dist';
}

module.exports = {
	type: 'postgres',
	host: 'localhost',
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	port: process.env.DATABASE_PORT || 5432,
	migrations: [`${baseDir}/database/migrations/*{.ts,.js}`],
	entities: [`${baseDir}/entities/*{.ts,.js}`],
	cli: {
		migrationsDir: 'src/database/migrations',
		entitiesDir: 'src/entities',
	},
};
