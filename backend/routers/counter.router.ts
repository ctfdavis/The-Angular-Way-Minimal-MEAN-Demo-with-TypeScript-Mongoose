import express from "express";

const router = express.Router();

router.get('/counters', listCounterController);

router.post('/counters', validateReq(createCounterSchema), createCounterController);

router.put('/counters/:id', validateReq(updateCounterSchema), updateCounterController);

router.delete('/counters/:id' validateReq(), deleteCounterController);