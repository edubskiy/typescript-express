import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [ key: string ]: string | undefined }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if (email != null) {
    res.send(email.toUpperCase());
  } else {
    res.send('You must provide email field')
  }
})

export { router }
