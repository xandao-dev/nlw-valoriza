import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
	sub: string;
}

export default function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
	const authToken = req.headers.authorization;

	if (!authToken) {
		return res.status(401).end();
	}

	// Get only the token part: Bearer <token>
	const token = authToken.split(' ')[1] || '';
	try {
		const secretKey = process.env.JWT_SECRET_KEY;
		if (!secretKey) {
			throw new Error(`Internal Error: Missing JWT SECRET KEY`);
		}
		const { sub } = verify(token, secretKey) as IPayload;
		req.userId = sub;

		return next();
	} catch (err) {
		return res.status(401).end();
	}
}
