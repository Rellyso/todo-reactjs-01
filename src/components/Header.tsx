import todoLogo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header
      className="flex items-center justify-center h-[200px] bg-gray-700 select-none"
    >
      <img
        src={todoLogo}
        alt="Logo da aplicação todo com desenho de foguete e escrito todo a sua esquerda."
      />
    </header>
  )
}