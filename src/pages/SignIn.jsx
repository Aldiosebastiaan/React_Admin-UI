import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom"; // Tambahkan navigasi

function SignIn() {
    const { login } = React.useContext(AuthContext);
    const navigate = useNavigate(); // Inisialisasi navigate

    const handleLogin = async (email, password) => {
        try {
            // Panggil service login
            const response = await loginService(email, password);
            
            // Log untuk memastikan data apa yang diterima dari API
            console.log("Response dari API:", response);

            // Destructuring refreshToken dari response
            // Pastikan backend mengembalikan object yang isinya memang 'refreshToken'
            const { refreshToken } = response;

            if (refreshToken) {
                login(refreshToken); // Masukkan ke context
                alert("Login Berhasil!");
                navigate("/"); // Pindahkan ke dashboard
            } else {
                alert("Token tidak ditemukan dalam response API");
            }

        } catch (err) {
            // Ambil pesan error dari backend jika ada
            const errorMsg = err.msg || "Login gagal, silakan cek email/password";
            console.error("Error Detail:", err);
            alert(errorMsg);
        }
    };

    return (
        <AuthLayout>
            <FormSignIn onSubmit={handleLogin}/>
        </AuthLayout>
    );
}

export default SignIn;