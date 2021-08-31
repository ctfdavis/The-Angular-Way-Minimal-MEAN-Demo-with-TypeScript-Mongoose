import { createCounterHandler, deleteCounterHandler, getCounterHandler, listCounterHandler, updateCounterHandler } from "../controllers/counter.controller";
import express from "express";
import validateReq from "../middleware/validateReq";
import { createCounterSchema, deleteCounterSchema, updateCounterSchema, getCounterSchema } from "../schema/counter.schema";

const router = express.Router();

router.get('/counters', listCounterHandler);

router.get('/counters/:counterId', validateReq(getCounterSchema), getCounterHandler);

router.post('/counters', validateReq(createCounterSchema), createCounterHandler);

router.put('/counters/:counterId', validateReq(updateCounterSchema), updateCounterHandler);

router.delete('/counters/:counterId', validateReq(deleteCounterSchema), deleteCounterHandler);

export default router;
