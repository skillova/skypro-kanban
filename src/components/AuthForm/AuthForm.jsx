import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn, signUp } from "../../services/auth";
import {
  Wrapper,
  ContainerSign,
  ModalBlock,
  Modal,
  ModalTitleH2,
  ModalFormLogin,
  ModalInput,
  ModalFormGroup,
  Button,
} from "./AuthForm.styled";

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   navigate("/");
  // };

  // состояние полей
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние ошибок
  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние текста ошибки, чтобы показать её пользователю
  const [error, setError] = useState("");

  // функция валидации
  const validateForm = () => {
    console.log("run /validateForm (Валидация формы)");
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // функция, которая отслеживает в полях изменения
  // и меняет состояние компонента
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // если у нас форма не прошла валидацию, то дальше не продолжаем
      return;
    }
    try {
      // чтобы не писать две разных функции, выберем нужный запрос через
      // тернарный оператор
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Wrapper>
      <ContainerSign>
        <Modal>
          <ModalBlock>
            <div>
              <ModalTitleH2>{isSignUp ? "Регистрация" : "Вход"}</ModalTitleH2>
            </div>
            <ModalFormLogin
              $login={isSignUp ? "SignUp" : "SignIn"}
              id={isSignUp ? "formLogUp" : "formLogIn"}
              action="#"
              onSubmit={handleSubmit}
            >
              {isSignUp && (
                <ModalInput
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Имя"
                  $error={errors.name}
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
                $error={errors.login}
                value={formData.login}
                onChange={handleChange}
              />
              <ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
                $error={errors.password}
                value={formData.password}
                onChange={handleChange}
              />
              <Button type="submit">
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </Button>
              <ModalFormGroup>
                <p>
                  {isSignUp ? "Уже есть аккаунт?" : "Нужно зарегистрироваться?"}
                  <Link to={isSignUp ? "/sign-in" : "/sign-up"}>
                    {isSignUp ? "Войдите здесь" : "Регистрируйтесь здесь"}
                  </Link>
                </p>
                <p style={{ color: "red" }}>{error}</p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSign>
    </Wrapper>
  );
};
export default AuthForm;
