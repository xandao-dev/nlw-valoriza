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
		const { sub } = verify(token, '29cb3ae4fa1449e3c7deb3658b69d414') as IPayload;
		req.userId = sub;

		return next();
	} catch (err) {
		return res.status(401).end();
	}
}
