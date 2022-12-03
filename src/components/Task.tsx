import cx from "classnames";
import { CheckCircle, Circle, Trash } from "phosphor-react";
import { AlertDialog } from "./AlertDialog";
import styles from './Task.module.css';
import { ITask, ITaskList } from "./Tasks";

interface ITaskProps {
  task: ITask;
  onChangeTasks: React.Dispatch<React.SetStateAction<ITaskList | undefined>>;
}

export function Task({ task, onChangeTasks }: ITaskProps) {

  const handleToggleMarked = () => {
    onChangeTasks(tasks => {
      if (tasks) {
        const changedTasks: ITaskList = tasks?.map(t => {
          if (t.id === task.id) {
            return {
              ...t,
              marked: !t.marked,
            }
          }
          return t
        })

        return changedTasks
      }
    })
  }

  const handleDeleteTask = () => {
    onChangeTasks(tasks => {
      if (tasks) {
        const changedTasks: ITaskList = tasks?.filter(t => task.id !== t.id)

        return changedTasks
      }
    })
  }

  return (
    <div className={cx(
      'flex flex-row items-start content-center gap-3',
      'p-4 w-full bg-gray-500 border border-gray-400 rounded-lg',
    )}>
      {task.marked
        ? <CheckCircle
          className='cursor-pointer text-purple'
          size={24}
          weight="fill"
          onClick={handleToggleMarked}
        />
        : <Circle
          className='cursor-pointer text-blue'
          size={24}
          onClick={handleToggleMarked}
        />
      }

      <p className='flex-1 text-gray-100'>
        {task.content}
      </p>

      <Trash
        size={24}
        className='cursor-pointer text-gray-300 hover:brightness-90'
        onClick={handleDeleteTask}
      />
    </div>
  )
}