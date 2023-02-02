import styles from "./Button.module.css";

type props = {
  icon: object;
  content: string;
};

const Button = (props: props) => {
  return (
    <button className={styles.button}>
      <>
        {props.icon}
        {props.content}
      </>
    </button>
  );
};

export default Button;
