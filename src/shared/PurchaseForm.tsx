// components/PurchaseForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase/firebaseConfig';
import generateSerialCode from '@/utils/generateSerialCode';
import { CheckoutFormValues } from '../../types';
import axios from 'axios';

const purchaseSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email("Invalid email").required("Email required"),
});

export default function PurchaseForm() {
  const handleFormSubmit = async (values: CheckoutFormValues) => {
    const serialCode = generateSerialCode(12);

    try {
      // Save email to Firestore
      await addDoc(collection(db, "orders"), {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        createdAt: new Date(),
      });

      // Send email with serial code
      await axios.post('https://emailoctopus.com/api/1.5/lists/YOUR_LIST_ID/contacts', {
        api_key: process.env.NEXT_PUBLIC_EMAILOCTOPUS_API_KEY,
        email_address: values.email,
        fields: {
          SERIAL_CODE: serialCode
        },
        status: 'SUBSCRIBED'
      });

      // Redirect to the PayPal payment page or handle payment integration
      window.location.href = `mailto:hatemthedev@gmail.com?subject=Packship%20Purchase%20Request&body=Please%20send%20me%20an%20invoice%20for%20Packship%20CLI%20Tool.%20Here%20is%20my%20preferred%20payment%20email%3A%20${values.email}`;
    } catch (error) {
      console.error("Error saving order: ", error);
    }
  };
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={purchaseSchema}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="w-full mb-8 flex flex-col justify-center items-center gap-2">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="firstName" className="text-lg font-semibold">First Name</label>
              <Field name="firstName" type="text" className="bg-slate-200 border-packship-red border-2 rounded-full text-lg w-2/3 px-4 py-2 outline-none" />
            </div>
            <ErrorMessage name="firstName" component="div" className="text-packship-red text-sm" />
          </div>
          <div className="w-full mb-8 flex flex-col justify-center items-center gap-2">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="lastName" className="text-lg font-semibold">Last Name</label>
              <Field name="lastName" type="text" className="bg-slate-200 border-packship-red border-2 rounded-full text-lg w-2/3 px-4 py-2 outline-none" />
            </div>
            <ErrorMessage name="lastName" component="div" className="text-packship-red text-sm" />
          </div>
          <div className="w-full mb-8 flex flex-col justify-center items-center gap-2">
            <div className="w-full flex justify-between items-center">
              <label htmlFor="email" className="text-lg font-semibold">Email Address</label>
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