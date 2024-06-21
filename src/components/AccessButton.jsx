import React from "react";

const AccessButton = ({ handleBtn, value, isDisabled }) => {
  return (
    <button
      onClick={handleBtn}
      className="access-button bg-primary py-2 px-6 rounded-full font-semibold disabled:bg-secondary disabled:text-zinc-400 disabled:cursor-not-allowed"
      disabled = {isDisabled}
    >
      {value}
    </button>
  );
};

export default AccessButton;
