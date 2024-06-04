import styles from './Container.module.css';

function Container(props) {
  const customClass = props.customClass ? styles[props.customClass] : '';
  return (
    <div className={`${styles.container} ${customClass}`}>
      {props.children}
    </div>
  );
}

export default Container;
