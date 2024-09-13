export default function adminSignIn(email: string, password: string) {
  if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    return { success: true };
  } else {
    const error = new Error("Invalid credentials");
    return { success: false, error };
  }
};
