import express from 'express';
import { Student, Student } from '../models/StudentModel';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.registraionNumber ||
      !request.body.roomNumber ||
      !request.body.blockNumber
    ) {
      return response.status(400).send({
        message: 'send all required fields: name , registration number , room number, block number',
      });
    }
    const newStudent = {
      name: request.body.name,
      registraionNumber: request.body.registraionNumber,
      roomNumber: request.body.roomNumber,
      blockNumber: request.body.blockNumber,
    };

    const Student = await Student.create(newBook);
    return response.status(201).send(Student);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
})
