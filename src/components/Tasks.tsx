import { nanoid } from 'nanoid'
import { useState } from 'react'
import { Empty } from './Empty'
import { NewTask } from './NewTask'
import { Task } from './Task'

export interface ITask {
  id: string | number;
  content: string;
  marked: boolean;
}

export type ITaskList = ITask[]

const taskListMock: ITaskList = [
  {
    content: 'sdadakskasdklasdklasd',
    marked: false,
    id: 1,
  },
  {
    id: 2,
    content: 'sdadakskasdklasdklasd',
    marked: false,
  },
]

export function Tasks() {
  const [tasks, setTasks] = useState<ITaskList | undefined>(taskListMock)

  const tasksCount = tasks?.length
  const tasksMarked = tasks?.filter(t => t.marked).length

  const handleCreateTask = (newTaskContent: string) => {
    const createdTask = {
      content: newTaskContent,
      id: nanoid(),
      marked: false,
    }

    let newTaskList: ITaskList = [
      ...tasks as ITaskList,
      createdTask
    ]

    newTaskList?.push()

    setTasks(newTaskList)
  }

  return (
    <div
      className="flex items-center justify-center flex-col gap-6 w-full max-w-3xl my-0 mx-auto px-8"
    >
      <NewTask
        onCreateTask={handleCreateTask}
      />

      <div
        className="w-full flex flex-row justify-between items-center"
      >
        <div className="font-bold text-sm text-blue flex gap-2 items-center">
          Tarefas criadas
          <span className='text-gray-200 bg-gray-400 rounded-full px-2 py-[2px] text-sm font-bold'>{tasksCount}</span>
        </div>

        <div className="font-bold text-sm text-purple flex gap-2 items-center">
          Concluídas
          <span className='text-gray-200 bg-gray-400 rounded-full px-2 py-[2px] text-sm font-bold'>{tasksMarked}</span>
        </div>
      </div>
      <div className='w-full flex gap-3 flex-col'>
        {tasks?.length
          ? tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onChangeTasks={setTasks}
            />
          ))
          : <Empty />
        }
      </div>
    </div>
  )
}