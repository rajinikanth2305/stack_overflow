import React, { useState, useEffect } from "react";
import { RichText } from "prismic-reactjs";
import { headerStyles } from "styles";
import { useForm } from "react-hook-form";
/**
 * Homepage header component
 */
const MyComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    setValue("id", count);
  });

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input id="one" defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <style jsx global>
        {headerStyles}
      </style>
    </div>
  );
};

export default MyComponent;
