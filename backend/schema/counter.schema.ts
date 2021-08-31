import { number, object, string } from "yup";

const payload = {
	body: object({
		count: number().required("Counter is required"),
		title: string().required("Title is required"),
		description: string()
	})
}

export const createCounterSchema = object({
	...payload
})

export const updateCounterSchema = object({
	params: object({
		counterId: string().required("Counter Id is required")
	}),
	...payload
})

export const deleteCounterSchema = object({
	params: object({
		counterId: string().required("Counter Id is required")
	})
})

export const getCounterSchema = object({
	params: object({
		counterId: string().required("Counter Id is required")
	})
})