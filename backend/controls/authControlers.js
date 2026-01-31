export const RegisterPage = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Register Page"
        });
    } catch (error) {
        console.error("Register Error:", error);
    }
};

export const LoginPage = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Login Page"
        });
    } catch (error) {
        console.error("Login Error:", error);
    }
};
