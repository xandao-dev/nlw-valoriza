import 'reflect-metadata';
import './database';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes';

// https://expressjs.com/pt-br/
const app = express();

// We can add a origin
app.use(cors());

app.use(express.json());
app.use(router);
app.use((err: Error, req: Request, res: Response) => {
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
