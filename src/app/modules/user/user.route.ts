import express from 'express'
import { userValidation } from './user.validation'
import { userController } from './user.controller'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post(
  '/create-student',
  validateRequest(userValidation.createUserZodSchema),
  userController.createUser
)

export const UserRoutes = router
