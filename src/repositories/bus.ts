import { getRepository } from 'typeorm';
import { Bus } from '../entities/bus';

export const getAll = async () => {
    return getRepository(Bus).find({ isActive: true });
}

export const getById = async (id: number) => {
    return getRepository(Bus).findOne({ id });
}

export const insert = async (rider: Bus) => {
    return getRepository(Bus).insert(rider);
}

export const update = async (id: number, riders: Partial<Bus>) => {
    return getRepository(Bus).update({ id }, riders);
}

export const hardDelete = async (id: number) => {
    return getRepository(Bus).delete({ id });
}
