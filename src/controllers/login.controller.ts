import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { get, controller, use, post, bodyValidator } from '../decorators';

function logger(req: Request, res: Response, next: NextFunction) {
  console.log('logging request with logger middleware');
  next();
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Passowrd</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (
      email != null &&
      password != null &&
      email === 'hi@hi.com' &&
      password === '1234'
    ) {
      req.session!.loggedIn = true;
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }
}
