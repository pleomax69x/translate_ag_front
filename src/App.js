import "./App.css";
import InputField from "./components/InputField";

function App() {
  return (
    <div className="container">
      <div className="main">
        <h1>HELLO</h1>
        <form>
          <div className="makeOrder__item">
            <InputField />
            {/* <fieldset>
              <legend>Main div</legend>

              <input id="name" />
              <label for="name">Enter name </label>
            </fieldset> */}
          </div>
          <div className="makeOrder__item"></div>
        </form>
      </div>
    </div>
  );
}

export default App;

/* <fieldset class='float-label-field'>
  <label for="txtEmail" >Email</label>
  <input id="txtEmail" type='text'>
</fieldset> */

// import React from "react";
// import { useForm } from "react-hook-form";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <select {...register("Послуга", { required: true })}>
//         <option value="Редагування">Редагування</option>
//         <option value="Переклад">Переклад</option>
//       </select>
//       <textarea
//         {...register("Enter Text", { required: true, maxLength: 100 })}
//       />
//       <input
//         type="text"
//         placeholder="Email"
//         {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
//       />
//       <input
//         type="text"
//         placeholder="Your Name"
//         {...register("Your Name", { required: true, maxLength: 30 })}
//       />
//       <input
//         type="text"
//         placeholder="Title"
//         {...register("Title", { required: true })}
//       />
//       <select {...register("Developer", { required: true })}>
//         <option value="English">English</option>
//         <option value="Russian">Russian</option>
//       </select>

//       <input type="submit" />
//     </form>
//   );
// }

// export default App;
