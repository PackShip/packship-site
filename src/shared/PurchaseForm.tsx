// components/PurchaseForm.tsx
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase/firebaseConfig';
import { CheckoutFormValues } from '../../types';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const purchaseSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email("Invalid email").required("Email required"),
});

export default function PurchaseForm() {
  const router = useRouter();

  const handleFormSubmit = async (values: CheckoutFormValues) => {
    try {
      // Save email to Firestore
      await addDoc(collection(db, "pendingOrders"), {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        createdAt: new Date(),
      });
  
      // Send welcome email using EmailOctopus
      await axios.post(`https://emailoctopus.com/api/1.5/lists/${process.env.NEXT_PUBLIC_EMAILOCTOPUS_PACKSHIP_LIST_ID}/contacts`, {
        api_key: process.env.NEXT_PUBLIC_EMAILOCTOPUS_API_KEY,
        email_address: values.email,
        fields: {
          FIRSTNAME: values.firstName,
          LASTNAME: values.lastName
        },
        status: 'SUBSCRIBED'
      });
      
      router.push('/success');
    } catch (error) {
      console.error("Error saving order or sending email: ", error);
    }
  };
  
  return (
    <>
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
    </>
  );
};