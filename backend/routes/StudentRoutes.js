import express from 'express';
import { Student } from '../models/StudentModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.regNumber ||
      !request.body.roomNumber ||
      !request.body.blockNumber
    ) {
      return response.status(400).send({
        message: 'send all required fields: name , registration number , room number, block number'
      });
    }
    const newStudent = {
      name: request.body.name,
      regNumber: request.body.regNumber,
      roomNumber: request.body.roomNumber,
      blockNumber: request.body.blockNumber,
    };

    const student = await Student.create(newStudent);
    return response.status(201).send(student);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const student = await Student.findById(id);
    return response.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    response.send(500).send({ message: error.message });
  }
});

router.put('/:id', async (request, response) => {
  try {

    if (
      !request.body.name ||
      !request.body.regNumber ||
      !request.body.roomNumber ||
      !request.body.blockNumber
    ) {
      return response.status(400).send({
        message: 'send all required fields: name , registration number , room number, block number',
      });
    }
    const { id } = request.params;
    const result = await Student.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Student not found' });
    }
    return response.status(200).send({ message: 'Student updated successfullly' });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Student.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Student not found' });
    }
    return response.status(200).send({ message: 'Student deleted successfullly' });

  } catch (error) {
    // return the following is  only necessary when we want to break early 
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})

export default router;