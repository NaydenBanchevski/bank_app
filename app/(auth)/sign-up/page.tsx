import AuthForm from "@/components/AuthForm";
import React from "react";

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
