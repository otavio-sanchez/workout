import { type, actionType, FormItem  } from './actionType';

export const addExercise = (exercise: FormItem): actionType => ({
    type: type.EXERCISES_ADD,
    form: exercise,
});

export const removeExercise = (exercise: FormItem): actionType => ({
    type: type.EXERCISES_REMOVE,
    form: exercise,
});


export const resetExercises = (): actionType => ({
    type: type.EXERCISES_RESET,
});