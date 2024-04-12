import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import AppWebRouter from "./AppWebRouter";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="*" element={<AppWebRouter />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          className="toast-position"
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
