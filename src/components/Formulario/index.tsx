import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import { Button } from "../Button";
import Style from "./Formulario.module.scss";
import { v4 as uuidv4 } from 'uuid'; 

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");

  function adicionarTarefa(event: React.FormEvent<HTMLElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4()
      },
    ])
    setTarefa("")
    setTempo("00:00")
  }
  return (
    <form className={Style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={Style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)}
          required
        />
      </div>
      <div className={Style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(event) => setTempo(event.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit" > Adicionar</Button>
    </form>
  );
}
