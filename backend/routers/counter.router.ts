import { createCounterHandler, deleteCounterHandler, listCounterHandler, updateCounterHandler } from "../controllers/counter.controller";
import express from "express";
import validateReq from "middleware/validateReq";
import { createCounterSchema, deleteCounterSchema, updateCounterSchema } from "../schema/counter.schema";

const router = express.Router();

router.get('/counters', listCounterHandler);

router.post('/counters', validateReq(createCounterSchema), createCounterHandler);

router.put('/counters/:id', validateReq(updateCounterSchema), updateCounterHandler);

router.delete('/counters/:id', validateReq(deleteCounterSchema), deleteCounterHandler);
