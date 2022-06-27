import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { Button } from "../Button";
import style from './cronometro.module.scss'
import Relogio from "./Relogio";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void,
}
export default function Cronometro({selecionado, finalizarTarefa} : Props){
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])
    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador -1)
            }
            finalizarTarefa()
        }, 1000)        
    }
    return(
    <div className={style.cronometro}>
        <p className={style.titulo}> Escolha um card e inicie o Cronômetro</p>
        <div className={style.relogioWrapper}>
            <Relogio tempo={tempo}/>
        </div>
        <Button onClick={() => regressiva(tempo)}>
            Começar!
        </Button>
    </div>
    )
}