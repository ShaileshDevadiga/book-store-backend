import { Router } from "express";

import { bookRoutes } from "./books.route.js";

const router = Router();

router.use('/books', bookRoutes);

export { router as v1Routes };

