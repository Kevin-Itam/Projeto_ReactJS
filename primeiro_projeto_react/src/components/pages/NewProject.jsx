import styles from './NewProject.module.css'
import Projectform from './project/Projectform'
function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar um serviço</p>
            <p>formulario</p>
            <Projectform btnText="Criar um projeto"/>
        </div>
       
    )

}
export default NewProject