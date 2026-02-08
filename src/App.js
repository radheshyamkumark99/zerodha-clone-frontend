import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const [checking, setChecking] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // token nahi → landing pages allowed
    if (!token) {
      setChecking(false);
      return;
    }

    // token hai → backend se verify
    fetch(`${process.env.REACT_APP_API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          // 🚀 already login → dashboard
          window.location.replace(
            process.env.REACT_APP_DASHBOARD_URL
          );
        } else {
          setChecking(false);
        }
      })
      .catch(() => {
        setChecking(false);
      });
  }, [location.pathname]);

  // jab tak check ho raha hai
  if (checking) {
    return <p>Checking session...</p>;
  }

  // 👇 yahin se routes render honge
  return <Outlet />;
}

export default App;
