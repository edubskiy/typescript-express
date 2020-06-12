import express, { Request, Response } from 'express'
import { router } from './routes/routes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session'
import { router as controllerRouter} from './decorators/controller'
import './controllers/login.controller'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['dskfjkdf'] }))
app.use(router)
app.use(controllerRouter)

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
