export interface Chat {
  id: string
  txt: string
  createdBy: "system" | "user"
}

export interface ChatOption {
  id: string
  question: string
  answer: string
}