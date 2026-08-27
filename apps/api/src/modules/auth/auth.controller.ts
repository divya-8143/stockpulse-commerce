import { Router, Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";
import { authenticate } from "../../middleware/authGuard.js";

const router = Router();

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await AuthService.registerUser(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

router.get("/me", authenticate, (req: Request, res: Response) => {
  res.json({ success: true, data: req.user });
});

export const authRouter = router;
