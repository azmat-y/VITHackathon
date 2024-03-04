import express from 'express';
import { Guard } from '../models/GuardModel.js';

const router = express.Router();

//route to create a new account
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.EmpId
        ) {
            return response.status(400).send({
                message: 'send all required fields: name , Emp Id'
            });
        }
        const newEmp = {
            name: request.body.name,
            EmpId: request.body.EmpId,
        };

        const guard = await Guard.create(newEmp);
        return response.status(201).send(guard);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }

});

//Route to get a specific Guard
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params; //get id from the request parameter
        const guard = await Guard.findById(id);
        return response.status(200).json(guard);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
