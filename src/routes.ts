import { Router } from 'express';
import ensureAdmin from './middlewares/ensureAdmin';
import CreateUserController from './controllers/CreateUserController';
import CreateTagController from './controllers/CreateTagController';
import AuthenticateUserController from './controllers/AuthenticateUserController';

const router = Router();
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/login', authenticateUserController.handle);
router.post('/users', createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);

export default router;
