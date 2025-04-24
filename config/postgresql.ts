import { Chat, ChatOption } from "../model/chat"


export const chatDB: ChatOption[] = [
  {
    id: `1`,
    question: "What is loan consolidation?",
    answer: `Interesting question!    
    Loan consolidation is the process of combining multiple loans into a single loan, often with a lower interest rate and more manageable monthly payments.`,
  },
  {
    id: `2`,
    question: "How can FLIN help me?",
    answer: `Great question!    
    FLIN can help you by providing personalized financial advice and resources to help you manage your loans effectively.`,
  },
]

export const chatHistory: Chat[] = [
  {
    id: `1`,
    txt: `How can i help you?`,
    createdBy: "system",
  },
  {
    id: `2`,
    txt: "1 - What is loan consolidation?",
    createdBy: "system",
  },
  {
    id: `3`,
    txt: "2 - How can FLIN help me?",
    createdBy: "system",
  },
]