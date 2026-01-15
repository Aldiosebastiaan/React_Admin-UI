import React, { useState, useContext } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import AppSnackbar from "../components/Elements/AppSnackbar";

function SignIn() {
  const { login } = useContext(AuthContext); //
  const navigate = useNavigate(); //

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); //

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  }; //

  const handleLogin = async (email, password) => {
    try {
      const response = await loginService(email, password); //

      const { refreshToken } = response; //

      if (refreshToken) {
        login(refreshToken); //
        
        // Tampilkan snackbar sukses alih-alih alert
        setSnackbar({
          open: true,
          message: "Login Berhasil!",
          severity: "success",
        });

        // Beri sedikit delay agar user bisa melihat snackbar sebelum pindah halaman
        setTimeout(() => {
          navigate("/"); //
        }, 1500);
      } else {
        setSnackbar({
          open: true,
          message: "Token tidak ditemukan dalam response API",
          severity: "error",
        });
      }
    } catch (err) {
      // Semua error ditangani oleh snackbar, alert dihapus
      const errorMsg = err.msg || "Login gagal, silakan cek email/password"; //
      
      setSnackbar({ 
        open: true, 
        message: errorMsg, 
        severity: "error" 
      }); //
      
      console.error("Error Detail:", err); //
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default SignIn;