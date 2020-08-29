import { Form } from '../components/FormWorkout/types';

export interface FormItem extends Form {
    id: number
}

export const type = {
    EXERCISES_ADD: 'EXERCISES_ADD',
    EXERCISES_REMOVE: 'EXERCISES_REMOVE',
    EXERCISES_RESET: 'EXERCISES_RESET',
};

export interface initialType {
    list?: FormItem[];
}

export interface actionType {
    form?: FormItem;
    type: string;
}

export interface stateType {
    exercises: initialType;
}