import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {
  xType?: string;
};

const SuperButton: React.FC<SuperButtonPropsType> = ({
  xType,
  className,
  disabled,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const disabledCN = disabled ? " " + s.disabled : "";
  //   console.log(disabledCN);
  const xTypeCN =
    xType === "red"
      ? " " + s.red
      : xType === "secondary"
      ? " " + s.secondary
      : " " + s.default;
  const finalClassName = s.button + disabledCN + xTypeCN;
  // + (className ? " " + className : ""); // задачка на смешивание классов
  return (
    <button
      disabled={disabled}
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    />
  );
};

export default SuperButton;
