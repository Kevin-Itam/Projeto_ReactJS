import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkB from './layout/LinkB'; 


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo <span>Costs</span></h1>
            <p>Aqui você pode gerenciar seus projetos e custos.</p>
            <LinkB to="/newprojects" text="Criar Projetos"/>
            <img src={savings} alt="Costs" />
        </section>
    );
}

export default Home;
