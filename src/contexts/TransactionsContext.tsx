import { createContext, useEffect, useState, type ReactNode } from "react"

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
  try {
    const response = await fetch('http://localhost:3333/transactions');
    let data = await response.json();
    
    // Filtra manualmente se tiver query
    if (query && query.trim() !== '') {
      const searchTerm = query.toLowerCase();
      data = data.filter((transaction: Transaction) => 
        transaction.description.toLowerCase().includes(searchTerm) ||
        transaction.category.toLowerCase().includes(searchTerm)
      );
    }
    
    setTransactions(data);
  } catch (error) {
    console.error('Erro ao buscar transações:', error);
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
