import React from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 items-center">
          <div>
            <label> Box1</label>{" "}
          </div>


          <div>
            {" "}
            <input
              className=" border border-amber-400"
              placeholder="Box 1"
              value=""
              defaultValue="test"
              {...register("example")}
            />
          </div>


        </div>

        <label> Box2</label>
        <input
          className=" border border-amber-400"
          placeholder="Box 2"
          {...register("exampleRequired", { required: true })}
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Home;
