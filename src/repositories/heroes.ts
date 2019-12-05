import { getRepository } from 'typeorm';
import { Heroe } from '../entities/heroes';

export const getAll = async () => {
    return getRepository(Heroe).find({ isActive: true });
}

export const getById = async (id: number) => {
    return getRepository(Heroe).findOne({ id });
}

export const insert = async (heroe: Heroe) => {
    return getRepository(Heroe).insert(heroe);
}

export const update = async (id: number, heroes: Partial<Heroe>) => {
    return getRepository(Heroe).update({ id }, heroes);
}

export const hardDelete = async (id: number) => {
    return getRepository(Heroe).delete({ id });
}
