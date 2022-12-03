import styles from './Empty.module.css'
import Clipboard from '../assets/clipboard.svg'

export function Empty() {
  return (
    <div
      className='flex flex-col items-center content-center gap-4 w-full h-full py-16 border-t border-gray-400 rounded-lg'
    >
      <img src={Clipboard} alt="ícone de prancheta com três linhas" />

      <p className='text-lg font-bold text-gray-300'>
        Você ainda não tem tarefas cadastradas
        <span className='font-normal block'>
          Crie tarefas e organize seus itens a fazer
        </span>
      </p>

    </div>
  )
}