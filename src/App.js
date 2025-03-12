// src/App.js
import React from "react";
import TaskManager from "./components/TaskManager";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <TaskManager />
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
