import React from "react";

const Project2Btn = ({ url, children }) => {
  const handleClick = () => {
    // TODO: get the token and pass it to auth service along with the sourceSystem
    let token = window.localStorage.token;
    console.log(token);

    // if (token){
    //    axios.post()
    // }

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   // setErrors(Validation(values));

    //   // console.log(values);

    //   //     if (errors.email === "") {
    //   //       await axios
    //   //         .post("http://localhost:8000/auth/signup", values)
    //   //         .then((res) => {
    //   //           navigate("/");
    //   //         })
    //   //         .catch((err) => console.log(err));
    //   //     }
    //   //   };
    //   await axios
    //     .post("http://localhost:8000/auth/signup", values)
    //     .then((res) => {
    //       navigate("/");
    //     })
    //     .catch((err) => console.log(err));
    // };

    window.open(url, "_blank");
  };

  return (
    <div className="d-flex  mb-4 justify-content-center align-items-center ">
      <div className="bg-white p-3 rounded w-25">
        <button
          onClick={handleClick}
          className="btn btn-success w-100 rounded-1"
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default Project2Btn;
