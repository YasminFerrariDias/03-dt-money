import { createContext, useEffect, useState, type ReactNode } from "react"
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionContextProviderProps {
  children: ReactNode;
}

/* eslint-disable react-refresh/only-export-components */
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
  if (query && query.trim() !== '') {
    const response = await api.get('/transactions');
    const allTransactions = response.data;
    
    const searchTerm = query.toLowerCase();
    const filtered = allTransactions.filter((transaction: Transaction) => 
      transaction.description.toLowerCase().includes(searchTerm) ||
      transaction.category.toLowerCase().includes(searchTerm)
    );
    
    setTransactions(filtered);
  } else {
    // Busca sem filtro
    const response = await api.get('/transactions');
    setTransactions(response.data);
  }
}

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTransactions();
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
