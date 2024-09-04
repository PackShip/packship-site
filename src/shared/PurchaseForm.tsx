// components/PurchaseForm.tsx
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase/firebaseConfig';
import { CheckoutFormValues } from '../../types';
import { useRouter } from 'next/navigation';
import emailjs from "@emailjs/browser";
import Link from 'next/link';

const purchaseSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email("Invalid email").required("Email required"),
});

export default function PurchaseForm() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Missing required environment variables for EmailJS.");
  }

  const handleFormSubmit = async (values: CheckoutFormValues) => {
    try {
      const templateParams = {
        firstName: values.firstName,
        lastname: values.lastName,
        email: values.email,
      };

      emailjs
        .send(serviceId, templateId, templateParams, { publicKey })
        .then((response) => {
          console.log('Email sent:', response);

          addDoc(collection(db, "pendingOrders"), {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            createdAt: new Date(),
          });

          router.push('/success');
        },
        (err) => {
          console.log('FAILED...', err);
          setErrorMessage('Oops! Something went wrong on our end. Please try requesting an invoice again.');
        }
      );  
    } catch (error) {
      console.error('Unexpected error:', error);
      setErrorMessage(`Oops! An unexpected error occurred on our end. Please try again. If the problem persists, contact our support team via ${<Link href="mailto:packshipcli@gmail.com" className="underline">packshipcli@gmail.com</Link>}`);
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
            {errorMessage && (
              <div className="text-packship-red text-sm mt-4">
                {errorMessage}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};