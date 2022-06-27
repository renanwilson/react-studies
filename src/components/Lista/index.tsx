import { Item } from "./Item";
import Style from './Lista.module.scss'
import { ITarefa } from "../../types/tarefa";

interface Props {
  tarefa: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export function Lista({tarefa, selecionaTarefa} : Props) {

  return (
    <aside className={Style.listaTarefas}>
      <h2>Estudos do dia </h2>
      <ul>
      {tarefa.map(item => (
        <Item
        selecionaTarefa={selecionaTarefa}
        key={item.id}
        {...item}
        />
      ))}
    </ul>
    </aside>
  );
}
