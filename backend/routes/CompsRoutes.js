import express from 'express';
import { Comps } from '../models/CompsModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    if (
      !request.body.compType ||
      !request.body.comp ||
      !request.body.studCheck ||
      !request.body.guardCheck
    ) {
      return response.status(400).send({
        message: 'send all required fields: Complain Type , Complain , check of Student, Check of guard'
      });
    }
    const newComp = {
      compType : request.body.compType,
      comp: request.body.comp ,
      studCheck: request.body.studCheck,
      guardCheck: request.body.guardCheck,
    };

    const comp = await Comps.create(newComp);
    return response.status(201).send(comp);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const comps = await Comps.findById(id);
    return response.status(200).json(comps);
  } catch (error) {
    console.log(error.message);
    response.send(500).send({ message: error.message });
  }
});

router.put('/:id', async (request, response) => {
  try {

    if (
        !request.body.compType ||
        !request.body.comp ||
        !request.body.studCheck ||
        !request.body.guardCheck
    ) {
      return response.status(400).send({
        message: 'send all required fields',
      });
    }
    const { id } = request.params;
    const result = await Comps.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Complaint not found' });
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
    const result = await Comps.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Complaint not found' });
    }
    return response.status(200).send({ message: 'Complaint removed successfullly' });

  } catch (error) {
    // return the following is  only necessary when we want to break early 
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})

export default router;