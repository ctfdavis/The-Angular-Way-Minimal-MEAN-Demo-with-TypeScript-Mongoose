import { Request, Response } from "express";
import { createCounter, updateCounter, listCounter, deleteCounter, findCounter, } from "../services/counter.service";

export async function createCounterHandler(req: Request, res: Response) {
  try {
    const counter = await createCounter(req.body);
    return res.send(counter.toJSON());
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.message);
  }
}

export async function updateCounterHandler(req: Request, res: Response) {
  try {
    const counter = await updateCounter({id: req.params.id}, req.body);
    return res.send(counter?.toJSON());
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.message);
  }
}

export async function deleteCounterHandler(req: Request, res: Response) {
    try {
        await deleteCounter({id: req.params.id});
        return res.sendStatus(200);
    } catch (e){
        console.log(e);
        return res.status(500).send(e.message);
    }
}

export async function listCounterHandler(req: Request, res: Response){
    try {
        const counters = await listCounter();
        return res.send(counters);
    } catch (e){
        console.log(e);
        return res.status(500).send(e.message);
    }
}

export async function getCounterHandler(req: Request, res: Response){
    try {
        const counter = await findCounter({id: req.params.id});
        return res.send(counter?.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(500).send(e.message);
    }
}