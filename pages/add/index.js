import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { postPapers } from "../../lib/helpers";

const initialValues = {
  title: "",
  hashtag: "",
  description: "",
  status: "",
};

const validationSchema = Yup.object({
  title: Yup.string().required("مقداری وارد نشده است"),
  hashtag: Yup.string().required(" مقداری وارد نشده است  "),
  description: Yup.string().required("مقداری وارد نشده است"),
  status: Yup.string().required("مقداری وارد نشده است"),
});
const PaperForm = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const { mutate, isLoading } = useMutation(postPapers, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const addFormHandler = (formData, { resetForm }) => {
    const items = {
      ...formData,
    };
    mutate(items);
    toast.success("Successfully toasted!");
    resetForm();
    router.push("/");
  };

  const formik = useFormik({
    initialValues,
    onSubmit: addFormHandler,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <section className="pt-32 container w-[90%] sm:max-w-4xl mx-auto">
      {session ? (
        <form
          className="py-5 px-3 border-indigo-300 border rounded-md shadow-md"
          onSubmit={formik.handleSubmit}
        >
          <h4 className="text-xl text-center font-semibold text-[#252525]">
            Add New Paper
          </h4>
          <div className="flex items-center flex-col mt-5 gap-x-3 md:flex-row">
            <input
              type={"text"}
              placeholder="Title"
              id="title"
              name="title"
              className="outline-none my-2 md:my-0 w-full border border-indigo-300 rounded-md px-2 h-[45px]"
              {...formik.getFieldProps("title")}
            />
            <input
              type={"text"}
              placeholder="Hashtag"
              id="hashtag"
              name="hashtag"
              className="outline-none my-2 md:my-0 w-full border border-indigo-300 rounded-md px-2 h-[45px]"
              {...formik.getFieldProps("hashtag")}
            />
          </div>
          <div className="my-3">
            <textarea
              placeholder="Message"
              id="description"
              name="description"
              className="outline-none w-full py-2 border border-indigo-300 rounded-md px-2 h-[145px]"
              {...formik.getFieldProps("description")}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center sm:gap-x-4 gap-x-2">
              <h6>Comment : </h6>
              <div className="flex items-center gap-x-1">
                <input
                  type="radio"
                  value="on"
                  name="status"
                  className="appearance-none h-3 w-3 rounded-full border-gray-500 border checked:border-indigo-500 checked:bg-indigo-500"
                  onChange={formik.handleChange}
                  checked={formik.values.status === "on"}
                />
                <label
                  htmlFor="radioone"
                  className="inline-block text-gray-800"
                >
                  On
                </label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="radio"
                  value="off"
                  name="status"
                  className="appearance-none h-3 w-3 rounded-full border-gray-500 border checked:border-indigo-500 checked:bg-indigo-500"
                  onChange={formik.handleChange}
                  checked={formik.values.status === "off"}
                />
                <label
                  htmlFor="radiotwo"
                  className="inline-block text-gray-800"
                >
                  Off
                </label>
              </div>
            </div>
            <button
              disabled={!formik.isValid}
              className={`${
                !formik.isValid && "opacity-50 cursor-none"
              } bg-indigo-500  rounded-md  duration-200 justify-center border border-transparent py-3 text-white flex hover:bg-transparent hover:text-gray-700 hover:border-indigo-500 px-6 transition-all`}
            >
              Send Paper
            </button>
          </div>
        </form>
      ) : (
        <div>this is no auth</div>
      )}
    </section>
  );
};

export default PaperForm;
