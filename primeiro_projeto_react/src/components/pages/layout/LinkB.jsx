import styles from './LinkB.module.css'
import {Link} from 'react-router-dom'
function LinkB({to, text}){
    return(
        <Link className={styles.btn} to={to}>{text}</Link>
    )
}
export default LinkB;