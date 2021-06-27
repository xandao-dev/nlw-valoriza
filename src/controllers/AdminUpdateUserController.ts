import { Request, Response } from 'express';
import AdminUpdateUserService from '../services/AdminUpdateUserService';

export default class AdminUpdateUserController {
	async handle(request: Request, response: Response) {
		const { id, name, email, password, admin } = request.body;
		const adminUpdateUserService = new AdminUpdateUserService();
		const user = await adminUpdateUserService.execute({ id, name, email, password, admin });
		return response.json(user);
	}
}
