import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp"; // Pastikan props diteruskan di dalam fragmen ini
import AppSnackbar from "../components/Elements/AppSnackbar";

function SignUp() {
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nama wajib diisi"), //
      email: Yup.string().email("Email tidak valid").required("Email wajib diisi"), //
      password: Yup.string().min(6, "Password minimal 6 karakter").required("Password wajib diisi"), //
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post("https://jwt-auth-eight-neon.vercel.app/register", values); //
        setSnackbar({ 
          open: true, 
          message: "Register Berhasil", 
          severity: "success" 
        }); //
      } catch (err) {
        setSnackbar({ 
          open: true, 
          message: err.response?.data?.msg || "Register Gagal", 
          severity: "error" 
        }); //
      } finally {
        setSubmitting(false); //
      }
    },
  });

  return (
    <AuthLayout>
      {/* Kirim formik sebagai props ke FormSignUp */}
      <FormSignUp formik={formik} />
      
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </AuthLayout>
  );
}

export default SignUp;