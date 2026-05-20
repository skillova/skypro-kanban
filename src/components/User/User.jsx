import { useNavigate } from "react-router-dom";

function User({ toggleUser }) {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    toggleUser();
    navigate("/logout-confirm");
  };

  return (
    <div className="header__pop-user-set pop-user-set" id="user-set-target">
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Тёмная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <button type="button" class="_hover03" onClick={handleLogout}>
        <a href="">Выйти</a>
      </button>
    </div>
  );
}

export default User;
