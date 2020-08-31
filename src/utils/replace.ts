import mock from '../mock/exercises'
import exercises from '../mock/exercises';

export const formatDate = (date: string): string => {
  const dateReplace = new Date(date);
  const year = dateReplace.getFullYear();
  const month = (`00${dateReplace.getMonth() + 1}`).slice(-2);
  const day = (`00${dateReplace.getDate()}`).slice(-2);

  return `${day}/${month}/${year}`;
};

export const formatExercises = (value: string): string => {

  const item = exercises.find((exercise: any) => exercise.value === value)

  if(item){
    return item.key
  }
  
  return ' ' ;
};

