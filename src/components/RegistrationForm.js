import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [firstName, setFirstName] = useState("");
  const [errorFirst, setErrorFirst] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorLast, setErrorLast] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = { firstName, lastName, email, password };
    if (validate()) {
      fetch("https://curious-bonnet-dog.cyclic.app/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      })
        .then(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          console.log("New customer created");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validate = () => {
    let validated = true;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (firstName === "") {
      setErrorFirst("Must enter a first name");
      validated = false;
    } else {
      setErrorFirst("");
    }
    if (lastName === "") {
      setErrorLast("Must enter a last name");
      validated = false;
    } else {
      setErrorLast("");
    }
    if (email === "" || !regex.test(email)) {
      setErrorEmail("Invalid Email");
      validated = false;
    } else {
      setErrorEmail("");
    }
    if (password === "") {
      setErrorPassword("Must enter a password");
      validated = false;
    } else {
      setErrorPassword("");
    }

    return validated;
  };

  return (
    <div className=" max-w-md my-0 mx-auto px-5">
      <h2 className=" text-2xl text-blue-400 font-semibold mt-12 mb-4 outline-black">
        Create an account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className=" space-y-2">
          <label className=" text-left block" htmlFor="firstName">
            First Name
          </label>
          <input
            className="w-full py-1.5 px-2.5 border-2 border-slate-200 outline-none rounded-sm shadow-sm box-border block"
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errorFirst && <p className="text-red-400 text-xs">{errorFirst}</p>}

          <label className=" text-left block" htmlFor="lastName">
            Last Name
          </label>
          <input
            className=" w-full py-1.5 px-2.5 border-2 border-slate-200 outline-none rounded-sm shadow-sm box-border block"
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errorLast && <p className="text-red-400 text-xs">{errorLast}</p>}

          <label className=" text-left block" htmlFor="email">
            E-mail Address
          </label>
          <input
            className=" w-full py-1.5 px-2.5 border-2 border-slate-200 outline-none rounded-sm shadow-sm box-border block"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && <p className="text-red-400 text-xs">{errorEmail}</p>}
          <label className=" text-left block" htmlFor="password">
            Password
          </label>
          <input
            className=" w-full py-1.5 px-2.5 border-2 border-slate-200 outline-none rounded-sm shadow-sm box-border block mb-2"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorPassword && (
            <p className="text-red-400 text-xs">{errorPassword}</p>
          )}
        </div>
        <button
          type="submit"
          className=" bg-blue-400 text-white p-2 rounded-lg w-full mt-6"
        >
          Create Account
        </button>
      </form>
      <p className="mt-4 text-md">
        Already have an account?{" "}
        <Link className=" underline text-blue-500" to={"/login"}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
