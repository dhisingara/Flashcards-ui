"use client";
import { AuthProvider } from "../context/AuthContext";
import BlankLayout from "../core/layouts/BlankLayout";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <BlankLayout>{children}</BlankLayout>
        </AuthProvider>
      </body>
    </html>
  );
};

export default LoginLayout;
