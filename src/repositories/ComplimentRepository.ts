import { Repository, EntityRepository } from 'typeorm';
import Compliment from '../entities/Compliment';

@EntityRepository(Compliment)
export default class ComplimentRepository extends Repository<Compliment> {}
