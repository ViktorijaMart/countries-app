import styles from "./Button.module.css";

type props = {
  icon: object;
  content: string;
  onClick: () => void;
};

const Button = (props: props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <>
        {props.icon}
        <p className={styles["button__text"]}>{props.content}</p>
      </>
    </button>
  );
};

export default Button;
