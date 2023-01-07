import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import { useContextTransaction } from "../../hooks/TransactionContext";

import closeImage from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface INewTransacionModalProps {
  isOpen: boolean;
  onCloseNewTransacionModal: () => void;
}

export function NewTransactionModal({
  isOpen,
  onCloseNewTransacionModal,
}: INewTransacionModalProps) {
  const { createTransaction } = useContextTransaction();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await createTransaction({
        title,
        category,
        amount,
        type,
      });

      setTitle("");
      setAmount(0);
      setCategory("");
      setType("deposit");

      onCloseNewTransacionModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseNewTransacionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onCloseNewTransacionModal}
      >
        <img src={closeImage} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
