import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  id: string
  question: string
  answer: string
  isOpen: boolean
  onToggle: (id: string) => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b border-white/10">
      <button
        className="flex w-full items-center justify-between py-6 text-left hover:text-gold-400 transition-colors"
        onClick={() => onToggle(id)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gold-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-white/80 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: Array<{
    id: string
    question: string
    answer: string
  }>
  allowMultiple?: boolean
  className?: string
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className,
}) => {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className={cn("divide-y divide-white/10", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(item.id)}
          onToggle={toggleItem}
        />
      ))}
    </div>
  )
}

export { Accordion }
