let baseDir = '';
if (process.env.NODE_ENV === 'development') {
	baseDir = 'src';
} else if (process.env.NODE_ENV === 'production') {
	baseDir = 'dist';
}

module.exports = {
	type: process.env.DATABASE_CON_TYPE,
	host: process.env.DATABASE_LINK || 'localhost',
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	port: process.env.DATABASE_HOST_PORT,
	secretArn: process.env.AWS_SECRET_ARN,
	resourceArn: process.env.AWS_RESOURCE_ARN,
	region: process.env.AWS_REGION,
	migrations: [`${baseDir}/database/migrations/*{.ts,.js}`],
	entities: [`${baseDir}/entities/*{.ts,.js}`],
	cli: {
		migrationsDir: `${baseDir}/database/migrations`,
		entitiesDir: `${baseDir}/entities`,
	},
};
