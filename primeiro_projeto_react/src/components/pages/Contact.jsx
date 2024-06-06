import styles from './Contact.module.css'

function Contact(){
    return(
        <section className={styles.contact_container}>
            <h1>Nos Contate</h1>
            <div>
                <form action="">
                    <input type="text" name="Nome" id="Nome" placeholder='Seu nome ...' />
                    <input type="text" name="Tel" id="Tel" placeholder='Seu telefone ...' />
                    <input type="email" name="email" id="email" placeholder='Seu Email aqui ...'/>
                </form>
            </div>
        </section>

    )

}
export default Contact