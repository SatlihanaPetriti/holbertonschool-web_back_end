export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    //if we would have a fuction insde the if we can have access of the task, task 2
  }

  return [task, task2];
}