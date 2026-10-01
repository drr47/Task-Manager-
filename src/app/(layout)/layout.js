import "../globals.css";
import { Toaster } from "react-hot-toast";

export default function NavLayout({ children }) {
  return (
    <main>
            <Toaster position="top-right" reverseOrder={false} />
      
      {children}
    </main>
  );
}
