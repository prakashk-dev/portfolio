import express from 'express';
import * as BaseEntity from '../controllers/base_entity.controller';

const router = express.Router();
router.route('/:user_id')
  .post(BaseEntity.save);
router.route('/:user_id')
    .get(BaseEntity.list)

export default router;