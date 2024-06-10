import Input from '../form/Input'
import Select from '../form/Select'
import Submitbtn from '../form/Submitbtn'
function Projectform({btnText}){
    return(
        <form>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o Orçamento"/>
            <Select name="category_id" text="Selecione a categoria"/>
            <div>
            <Submitbtn text={btnText} />
            </div>
        </form>
    )
    
}
export default Projectform