import { getRepository } from 'typeorm';
import { Bus } from '../entities';

export const getAll = async () => {
    return getRepository(Bus).find({ isActive: true });
}

export const getById = async (id: number) => {
    return getRepository(Bus).findOne({ id });
}

export const insert = async (bus: Bus) => {
    return getRepository(Bus).insert(bus);
}

export const update = async (id: number, bus: Partial<Bus>) => {
    return getRepository(Bus).update({ id }, bus);
}

export const hardDelete = async (id: number) => {
    return getRepository(Bus).delete({ id });
}
