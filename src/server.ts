import 'reflect-metadata';
import './database';
import express, { Request, Response, NextFunction, response } from 'express';
import 'express-async-errors';
import router from './routes';

// https://expressjs.com/pt-br/
const app = express();

app.use(express.json());
app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof Error) {
		return res.status(400).json({
			error: err.message,
		});
	}
	return res.status(500).json({
		status: 'error',
		message: 'Internal Server Error',
	});
});

// Listening on localhost:3000
app.listen(3000, () => console.log('Server is running!'));
