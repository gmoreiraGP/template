import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "API",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "seuemail@email.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const url = "http://localhost:3333/login";
        const user = {
          email: credentials.username,
          password: credentials.password,
        };
        const response = await axios.post(url, user);

        if (response) {
          return response.data;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "auth/signin",
  },
});
