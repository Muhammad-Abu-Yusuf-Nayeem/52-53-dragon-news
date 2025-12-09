import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button className="btn bg-[#2F2F2F] text-white border-black ">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn bg-[#2f2f2f]  text-white border-black  ">
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
