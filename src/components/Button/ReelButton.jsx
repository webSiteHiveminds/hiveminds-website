const ReelButton = ({ className = "", onClick, text }) => {
  return (
    <div className="btn_wrapper ">
      <button
        aria-label="Play Showreel"
        onClick={onClick}
        className={`btn-white btn-hover btn-item flex gap-[0.5vw] group mobile:gap-[1.5vw] tablet:gap-[1vw] ${className}`}
      >
        <span></span>
        {text}
        <svg
          width="19"
          height="27"
          viewBox="0 0 19 27"
          fill="none"
          className="group-hover:fill-black w-[1.5vw] h-[1.5vw] mobile:w-[3vw] mobile:h-[3vw] tablet:w-[2.5vw] tablet:h-[2.5vw]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.44648 0C1.60849 0 1.77049 0 1.94407 0C2.56895 0.135719 3.13597 0.419494 3.66828 0.801974C8.27388 4.17026 12.8795 7.52621 17.4735 10.8945C17.7049 11.0672 17.948 11.2523 18.1447 11.4744C18.92 12.3134 19.2209 13.2881 18.8274 14.4355C18.5844 15.1511 18.0868 15.6447 17.5082 16.0641C12.8795 19.4448 8.26231 22.8254 3.63356 26.1814C3.21698 26.4898 2.73096 26.7242 2.24494 26.897C1.31919 27.2177 0.509162 26.7736 0.208293 25.7865C0.0694311 25.3424 0.0231437 24.8612 0.0231437 24.3923C0 17.1252 0 9.85811 0 2.60333C0 2.4306 0 2.25786 0.0115719 2.07279C0.0578593 0.974706 0.486018 0.345466 1.44648 0Z"
            fill="white "
            className="group-hover:fill-black duration-500 ease-in-out"

          />
        </svg>
      </button>
    </div>
  );
};

export default ReelButton;
