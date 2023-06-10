import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/user.route'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/',usersRouter)

app.use(globalErrorHandler)


export default app
