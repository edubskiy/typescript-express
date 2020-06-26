import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from '../decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session != null && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Permission denied');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session != null && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>You are NOT logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route');
  }
}
