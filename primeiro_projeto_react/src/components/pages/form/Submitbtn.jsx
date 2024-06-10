import style from './Submitbtn.module.css'
function Submitbtn({text}) {
    return (
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    )
}
export default Submitbtn