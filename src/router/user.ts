import { Router } from 'express';
import * as UserController from '../controller/user.js';

const userRouter = Router();

userRouter.get('/', UserController.findAll);
userRouter.post('/', UserController.create);
userRouter.get('/:id', UserController.findById);
userRouter.put('/:id', UserController.update);

export default userRouter;


