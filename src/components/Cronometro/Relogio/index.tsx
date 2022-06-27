import	Style from './Relogio.module.scss'
interface Props {
    tempo: number | undefined
}
export default function Relogio({ tempo = 0}: Props){
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [ minutosDezena, minutosUnidade ] = String(minutos).padStart(2, '0')
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')
    return(
        <>
        <span className={Style.relogioNumero}>{minutosDezena}</span>
        <span className={Style.relogioNumero}>{minutosUnidade}</span>
        <span className={Style.relogioDivisao}>:</span>
        <span className={Style.relogioNumero}>{segundoDezena}</span>
        <span className={Style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}