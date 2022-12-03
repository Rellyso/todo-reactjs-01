import { Transition } from "@headlessui/react";
import { Action, AlertDialogProps, Cancel, Content, Description, Overlay, Portal, Root, Title, Trigger } from "@radix-ui/react-alert-dialog";
import { Fragment, useState } from "react";
import cx from "classnames";

interface Props extends AlertDialogProps {
  confirmMessage: string;
  title: string;
  description: string;
  onConfirm: () => void;
  cancelMessage?: string;
}

export function AlertDialog({ title, children, cancelMessage, confirmMessage, onConfirm, description, defaultOpen, }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Root defaultOpen={defaultOpen} open={open} onOpenChange={setOpen}>
      <Trigger asChild>
        {children}
      </Trigger>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Overlay
          forceMount
          className="fixed inset-0 z-20 bg-black/50" />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Content
          className={cx(
            "fixed z-50",
            "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
            "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
            "bg-white dark:bg-gray-800",
            "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          )}
        >
          <Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {title}
          </Title>
          <Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
            {description}
          </Description>
          <div className="mt-2 space-y-2">
            olá
          </div>
          <div className="mt-4 flex justify-end">
            <Cancel
              className={cx(
                "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                "border border-transparent",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <button>
                {cancelMessage ? cancelMessage : 'Cancelar'}
              </button>
            </Cancel>
            <Action onClick={onConfirm} asChild>
              <button>{confirmMessage}</button>
            </Action>
          </div>
        </Content>
      </Transition.Child>
    </Root >
  )
}