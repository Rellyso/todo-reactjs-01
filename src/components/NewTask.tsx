import classNames from "classnames";
import { nanoid } from "nanoid";
import { PlusCircle } from "phosphor-react";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import styles from './NewTask.module.css'
import { ITaskList } from "./Tasks";

interface NewTaskProps {
  onCreateTask: (newTaskContent: string) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [taskContent, setTaskContent] = useState('')

  function handleCreateTask() {
    if (taskContent)
      onCreateTask(taskContent)

    setTaskContent('')
  }

  return (
    <div className='translate-y-[-50%] flex items-center gap-2 w-full'>
      <input
        className='p-4 text-base border-none rounded-lg flex-1 bg-gray-500 text-gray-300 placeholder:text-gray-300 outline-none'
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
      />
      <button
        className={classNames(
          'bg-blueDark text-gray-100 p-4 border-none rounded-lg font-bold text-sm',
          'inline-flex gap-2 items-center flex-wrap',
          'hover:brightness-105 focus:ring-2 ring-blueDark ring-offset-2 ring-offset-gray-500',
        )}
        type="button"
        onClick={handleCreateTask}
      >
        Criar
        <PlusCircle
          className='text-gray-100'
          size='16'
          weight="bold"
        />
      </button>
    </div>
  )
}