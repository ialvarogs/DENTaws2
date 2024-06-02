"use client";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "../components/translations";
Amplify.configure(outputs);

export default function App() {
  return (
    <Authenticator signUpAttributes={["email","name","middle_name", "family_name" ]}>
      {({ signOut }) => (
        <main>
          <h1>Iniciar sesión</h1>
          <button onClick={signOut}>Cerrar sesión</button>
        </main>
      )}
    </Authenticator>
  );
}
