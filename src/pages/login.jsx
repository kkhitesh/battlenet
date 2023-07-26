import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    if (username === "" || password === "")
      return toast.error("Please fill all the fields");
    axios
      .post("https://test.indusgame.com/logins", {
        username: username,
        password: password,
      })
      .then(
        (response) => {
          if (response.status == 200) {
            localStorage.setItem(
              "access_token",
              response.data.auth.accessToken
            );
            localStorage.setItem(
              "refresh_token",
              response.data.auth.refreshToken
            );
            toast.success("Successfully logged in");
            window.location.href = "/";
          }
        },
        (err) => {
          const errmsg = err.response.data.reason;
          toast.error(errmsg);
        }
      )
      .then(() => {
        nav("/");
      });
  };

  const loginasGuest = (e) => {
    e.preventDefault();
    axios
      .post("https://test.indusgame.com/logins", {
        username: "hitesh.kowdiki",
        password: "5rzr203fojWbhIBYhoZjeDl8VZ6U6aaP",
      })
      .then(
        (response) => {
          if (response.status == 200) {
            localStorage.setItem(
              "access_token",
              response.data.auth.accessToken
            );
            localStorage.setItem(
              "refresh_token",
              response.data.auth.refreshToken
            );
            toast.success("Successfully logged in");
            window.location.href = "/";
          }
        },
        (err) => {
          const errmsg = err.response.data.reason;
          toast.error(errmsg);
        }
      );
  };

  return (
    <div className="flex h-[90vh]  w-[90vw] shadow-2xl mt-10 rounded-lg">
      <div className="flex-1">
        <img
          src="https://uploads-ssl.webflow.com/622870a143b9561d25f9ea2f/6414ab61c07cb138bd6d6ba0_indus_gdc_2023_flags_capes.jpg"
          alt="indus"
          className="h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="flex-1 items-center justify-center flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">Welcome Back</h1>
        <form className="flex flex-col gap-5 w-3/5">
          <input
            type="text"
            className="px-5 py-3 border-gray-300 border-2 rounded-lg"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            pattern="^(?!.*\.\.)[a-z](?:[\w.]{3,18}[a-z])?$"
            required
          />
          <input
            type="password"
            className="px-5 py-3 border-gray-300 border-2 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />

          <span className="font-semibold">
            <button
              type="submit"
              className="bg-black px-4 py-3 w-[45%] text-white rounded-md mr-[10%]"
              onClick={loginUser}
            >
              Login
            </button>
            <button
              type="button"
              className="bg-white px-4 py-3 w-[45%] rounded-md border-black border-2"
              onClick={loginasGuest}
            >
              Guest
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};
