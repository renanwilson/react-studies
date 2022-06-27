import React, { useState } from 'react';
import Cronometro from '../../components/Cronometro';
import { Formulario } from '../../components/Formulario';
import { Lista } from '../../components/Lista';
import { ITarefa } from '../../types/tarefa';
import  Style  from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [ selecionado, setSelecionado] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefaAnterior => tarefaAnterior.map( tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas => {
        if(tarefas.id === selecionado.id){
          return{
            ...tarefas,
            selecionado: false,
            completado: true,
          }
        }
        return tarefas
      }))
    }
  }
  return (
    <div className={Style.AppStyle}>
     <Formulario  setTarefas={setTarefas}/>
     <Lista tarefa={tarefas} selecionaTarefa={selecionaTarefa}/>
     <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
