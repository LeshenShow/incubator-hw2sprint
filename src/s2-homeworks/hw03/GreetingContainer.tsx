import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useState,
} from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[]; // need to fix any
  addUserCallback: (name: string) => void; // need to fix any
};

export const pureAddUser = (
  name: string,
  setError: (error: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void
) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

  if (!name.trim()) {
    setError("Ошибка! Введите имя!");
  } else {
    addUserCallback(name);
    setName("");
  }
};
export const pureOnBlur = (name: string, setError: any) => {
  // если имя пустое - показать ошибку
  if (!name.trim()) {
    setError("Ошибка! Введите имя!");
  }
};
export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: any
) => {
  // если нажата кнопка Enter - добавить
  console.log(e);
  if (e.key === "Enter") {
    addUser();
  }
};
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    error && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length; // need to fix
  const lastUserName = totalUsers ? users[totalUsers - 1].name : ""; // need to fix
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
