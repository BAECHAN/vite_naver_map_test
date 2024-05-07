import React from "react";

export const Button = (props: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const { onClick } = props;

  return (
    <button type="button" onClick={onClick}>
      버튼
    </button>
  );
};
