import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
// controllers
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import FileController from './app/controllers/FileController';
// middlewares
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// no Authorization required
routes.post('/users', UserController.store);
routes.post('/login', AuthController.store);

// Auth middleware
routes.use(authMiddlewares);

// Authorization required
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
