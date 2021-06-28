import 'reflect-metadata';
import './database';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes';

// Expose process.env.<ENVIRONMENTS VARIABLES>
dotenv.config();

// https://expressjs.com/pt-br/
const app = express();

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}!`));
