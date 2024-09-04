"use client";

import React, { useState } from "react";
import SectionHeader from "@/shared/SectionHeader";
import { auth, db } from "@/firebase/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import generateSerialCode from "@/utils/generateSerialCode";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import adminSignIn from "@/server/adminSignIn";
import { TailSpin } from "react-loader-spinner"; // Import TailSpin loader

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SerialSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  userEmail: Yup.string().email("Invalid email").required("Required"),
});

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleAdminLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    setDisabled(true);
    setErrorMessage(null);

    setTimeout(async () => {
      try {
        const result = adminSignIn(values.email, values.password);
        if (result.success) {
          setLoggedIn(true);
        } else if (result.error) {
          setErrorMessage(result.error.message);
        }
      } catch (error) {
        console.error("Error logging in: ", error);
        alert("Login failed. Please check your credentials.");
      } finally {
        setLoading(false); // Hide spinner after 2 seconds
      }
    }, 2000);
  };

  const handleSerialGeneration = async (values: { firstName: string; lastName: string; userEmail: string }) => {
    const serialCode = generateSerialCode(12);
    try {
      // Query the latest pending order for the given email
      const pendingOrderQuery = query(
        collection(db, "pendingOrders"),
        where("email", "==", values.userEmail),
        orderBy("createdAt", "desc"),
        limit(1)
      );

      const pendingOrderSnapshot = await getDocs(pendingOrderQuery);

      if (!pendingOrderSnapshot.empty) {
        const pendingOrderDoc = pendingOrderSnapshot.docs[0];
        const pendingOrderData = pendingOrderDoc.data();

        // Create the order in the 'fulfilledOrders' collection
        await addDoc(collection(db, "fulfilledOrders"), {
          ...pendingOrderData,
          serialCode: serialCode,
          createdAt: new Date(),
        });

        // Delete the order from 'pendingOrders' collection
        await deleteDoc(pendingOrderDoc.ref);

        alert(`Serial code generated: ${serialCode}. It has been saved to the database.`);
      } else {
        alert("No pending order found for this user.");
      }
    } catch (error) {
      console.error("Error generating serial code or moving order: ", error);
    }
  };

  return (
    <section className="mt-24">
      <div className="kontainer text-center">
        <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-8">
          <SectionHeader header="Admin Portal" />

          {!loggedIn ? (
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={handleAdminLogin}
            >
              {({ isSubmitting }) => (
                <Form className="w-full sm:w-1/2">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Admin Email"
                      className="bg-slate-200 text-black border-packship-red border-2 w-full rounded-full text-lg px-4 py-2 outline-none"
                    />
                    <ErrorMessage name="email" component="div" className="text-packship-red text-sm" />

                    <div className="bg-slate-200 text-black border-packship-red border-2 w-full rounded-full text-lg px-4 py-2 flex justify-between items-center">
                      <Field
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="bg-transparent text-black w-3/4 outline-none"
                      />
                      <button
                        onClick={handlePasswordVisibility}
                        type="button"
                        className="ml-2"
                      >
                        <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
                      </button>
                    </div>
                    <ErrorMessage name="password" component="div" className="text-packship-red text-sm" />
                    {errorMessage && (
                      <span className="text-packship-red text-sm">{errorMessage}</span>
                    )}

                    <button
                      type="submit"
                      className="bg-packship-red text-white w-full font-bold py-2 px-4 rounded-full hover:bg-red-700 transition my-8 flex justify-center items-center"
                      disabled={isSubmitting || loading}
                    >
                      {loading ? (
                        <TailSpin
                          height={28}
                          color="#000"
                        />
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{ firstName: "", lastName: "", userEmail: "" }}
              validationSchema={SerialSchema}
              onSubmit={handleSerialGeneration}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col items-center gap-4 w-full sm:w-1/2">
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Customer First Name"
                    className="bg-slate-200 text-black border-packship-red border-2 rounded-full text-lg w-full px-4 py-2 outline-none"
                    required
                  />
                  <ErrorMessage name="firstName" component="div" className="text-packship-red text-sm" />

                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Customer Last Name"
                    className="bg-slate-200 text-black border-packship-red border-2 rounded-full text-lg w-full px-4 py-2 outline-none"
                    required
                  />
                  <ErrorMessage name="lastName" component="div" className="text-packship-red text-sm" />

                  <Field
                    type="email"
                    name="userEmail"
                    placeholder="Customer Email"
                    className="bg-slate-200 text-black border-packship-red border-2 rounded-full text-lg w-full px-4 py-2 outline-none"
                    required
                  />
                  <ErrorMessage name="userEmail" component="div" className="text-packship-red text-sm" />

                  <button
                    type="submit"
                    className={`${disabled ? "bg-gray-400": "bg-packship-red" } w-full text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition my-8`}
                    disabled={disabled}
                  >
                    Generate Serial Code
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </section>
  );
}