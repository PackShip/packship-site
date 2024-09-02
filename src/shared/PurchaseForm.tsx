// components/PurchaseForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const purchaseSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
});

export default function PurchaseForm() {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={purchaseSchema}
      onSubmit={(values) => {
        window.location.href = `mailto:hatemthedev@gmail.com?subject=Packship%20Purchase%20Request&body=Please%20send%20me%20an%20invoice%20for%20Packship%20CLI%20Tool.%20Here%20is%20my%20preferred%20payment%20email%3A%20${values.email}`;
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="w-full mb-8 flex flex-col justify-center items-center gap-2">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="email" className="text-md font-semibold">Email Address</label>
              <Field name="email" type="email" className="bg-slate-200 border-packship-red border-2 rounded-full text-lg w-2/3 px-4 py-2 outline-none" />
            </div>
            <ErrorMessage name="email" component="div" className="text-packship-red text-sm" />
          </div>
          <button
            type="submit"
            className="bg-packship-red text-white w-full font-bold py-2 px-4 rounded-full hover:bg-red-700 transition"
            disabled={isSubmitting}
          >
            Request Invoice via Email
          </button>
        </Form>
      )}
    </Formik>
  );
};