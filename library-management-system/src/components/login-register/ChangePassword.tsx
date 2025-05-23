import { useNavigate } from "react-router-dom";
import PasswordIcon from "../../assets/icons/password_icon.png";
import Button from "./Button";
import { Input } from "./Input";
export default function ChangePassword(): React.ReactNode {
  const navigate = useNavigate();
  return (
    <div id="login">
      <form className="w-[35vw] items-center flex flex-col pb-20">
        <p className="mb-3 text-login-text font-kross-neue-grotesk text-sm">
          Please enter your new password
        </p>
        <Input
          placeholder="New password"
          img={PasswordIcon}
          isPassword={true}
        ></Input>
        <Input
          placeholder="Confirm password"
          img={PasswordIcon}
          isPassword={true}
        ></Input>
        <Button
          className="mb-[1.5rem]"
          type="button"
          text="Change password"
          handleClick={() => {
            navigate("/login")
          }}
        ></Button>
        <p className="w-3/4 text-center text-login-text text-sm">
          Don't have an account?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
            className="underline text-link"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
