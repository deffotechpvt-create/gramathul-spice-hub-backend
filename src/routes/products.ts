import { Router } from 'express';

export type Product = {
  id: string;
  title: string;
  description?: string;
  price: number;
  image?: string;
};

const router = Router();

// Simple in-memory store (reset when server restarts)
const products: Product[] = [
  { id: '1', title: 'Ground Turmeric', description: 'Fresh ground turmeric', price: 3.5, image: '' },
  { id: '2', title: 'Cumin Seeds', description: 'Whole cumin seeds', price: 2.25, image: '' },
];

router.get('/', (_req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const p = products.find((x) => x.id === req.params.id);
  if (!p) return res.status(404).json({ message: 'Product not found' });
  return res.json(p);
});

router.post('/', (req, res) => {
  const { title, description, price, image } = req.body as Partial<Product>;
  if (!title || typeof price !== 'number') {
    return res.status(400).json({ message: 'Invalid product data' });
  }
  const id = String(Date.now());
  const product: Product = { id, title, description, price, image };
  products.push(product);
  return res.status(201).json(product);
});

export default router;
