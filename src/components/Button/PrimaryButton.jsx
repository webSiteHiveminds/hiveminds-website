import Link from "next/link";
import styles from "./styles.module.css";

const PrimaryButton = ({ text, className = "", ...props }) => {
  return (
    <Link {...props} className={`${styles.btn} ${className}`}>
      
      <div aria-hidden="true" className={styles.btnCircle}>
        <div className={styles.btnCircleText}>
            <div>
          <svg
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.btnIcon}
          >
            <path
              data-v-f4363f2a
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
              className={`${styles.btnPath}`}
            />
            <path
              data-v-f4363f2a
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
              className={`${styles.btnPath}`}
            />
          </svg>

            </div>
          <span className={`${styles.btnText} !pr-0 !mt-[0.3vw]`}>{text}</span>
        </div>
      </div>
      <span className={styles.btnText}>{text}</span>
    </Link>
  );
};

export default PrimaryButton;
