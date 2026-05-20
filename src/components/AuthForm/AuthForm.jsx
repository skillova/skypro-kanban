import { Link, useNavigate } from "react-router-dom";
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
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
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
            >
              {isSignUp && (
                <ModalInput
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Имя"
                />
              )}
              <ModalInput
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <ModalInput
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <Button onClick={handleLogin}>
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </Button>
              <ModalFormGroup>
                <p>
                  {isSignUp ? "Уже есть аккаунт?" : "Нужно зарегистрироваться?"}
                  <Link to={isSignUp ? "/sign-in" : "/sign-up"}>
                    {isSignUp ? "Войдите здесь" : "Регистрируйтесь здесь"}
                  </Link>
                </p>
              </ModalFormGroup>
            </ModalFormLogin>
          </ModalBlock>
        </Modal>
      </ContainerSign>
    </Wrapper>
  );
};
export default AuthForm;
