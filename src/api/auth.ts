import env from "../env";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response = await fetch(`${env.BACKEND_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    const response = await fetch(`${env.BACKEND_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    console.log(response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
