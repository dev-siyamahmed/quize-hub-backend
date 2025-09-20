import express from 'express';
import cors from 'cors';
import sendResponse from './utils/sendResponse';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const test = (req: Request, res: Response) => {
  res.sendResponse({
    status: true,
    message: "Welcome to server",
    headers: req.headers
  })
};

app.get('/', test);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;
