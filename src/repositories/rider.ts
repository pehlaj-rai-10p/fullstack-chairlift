import { getRepository } from 'typeorm';
import { Rider } from '../entities';

export const getAll = async () => {
    return getRepository(Rider).find({ isActive: true });
}

export const getById = async (id: number) => {
    return getRepository(Rider).findOne({ id });
}

export const getByUserName = async (userName: string) => {
    return getRepository(Rider).findOne({ userName });
}

export const insert = async (rider: Rider) => {
    return getRepository(Rider).insert(rider);
}

export const update = async (id: number, riders: Partial<Rider>) => {
    return getRepository(Rider).update({ id }, riders);
}

export const hardDelete = async (id: number) => {
    return getRepository(Rider).delete({ id });
}
