import * as Yup from "yup";
import { Form } from "./types";

interface Error {
  field: string;
  message: string;
}

const checkout = Yup.object().shape({
  time: Yup.number().positive("Must be positive").required("Required!"),
  date: Yup.string().required("Required!"),
  activities: Yup.string().required("Required!"),
});

const validation = async (form: Form) => await checkout.isValid(form);

const formErrors = async (form: Form): Promise<object> => {
  const formCheckout = await checkout
    .validate(form, { abortEarly: false })
    .catch((errors) => {
      const schemaErrors = errors.inner.map((err: any) => {
        return { field: err.path, message: err.message };
      });

      return schemaErrors;
    });

  if (formCheckout && formCheckout.length) {
    const obj: any = {};
    formCheckout.map((error: Error) => {
      obj[error.field] = error.message;
    });

    return obj;
  }

  return null;
};

export { validation, formErrors };
