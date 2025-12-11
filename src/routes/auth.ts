import { Router } from 'express';

const router = Router();

// Very small mock auth for demo purposes
router.post('/login', (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  // Accept any credentials and return a mock token
  const token = `mock-token-${Date.now()}`;
  return res.json({ token, user: { email } });
});

export default router;
