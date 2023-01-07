import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}

type ITransactionInput = Omit<ITransaction, "id" | "createdAt">;

interface ITransactionProviderProps {
  children: ReactNode;
}

interface ITransactionContextData {
  transactions: ITransaction[];
  createTransaction: (data: ITransactionInput) => Promise<void>;
}

const TransactionContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData
);

function TransactionsProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    (async function getData() {
      const { data } = await api.get("/transactions");
      setTransactions(data.transactions);
    })();
  }, []);

  const createTransaction = async (data: ITransactionInput) => {
    const response = await api.post("/transactions", {
      ...data,
      createdAt: new Date(),
    });

    setTransactions([...transactions, response.data.transactions]);
  };

  return (
    <TransactionContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

function useContextTransaction() {
  return useContext(TransactionContext);
}

export { TransactionsProvider, useContextTransaction };
