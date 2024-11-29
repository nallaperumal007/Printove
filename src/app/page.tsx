"use client";

import { Page } from "@shopify/polaris";
import PageLayout from "../components/main-layout"; // Make sure to update the path to your layout
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);

  
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  const handleNavigation = (role: string) => {
    if (userRole) {
      if (userRole === role) {
        router.push(`/${role.toLowerCase()}`);
      } else {
        alert("You are not authorized to access this page.");
      }
    } else {
      router.push("/login"); // Redirect to login if not logged in
    }
  };

  return (
    <PageLayout>
      <Navbar />
      <Page fullWidth>
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "1200px",
              width: "100%",
              padding: "40px 20px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 style={{ fontSize: "36px", color: "#333" }}>Welcome to Printrove</h1>
            <br /><br />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                flexWrap: "wrap",
              }}
            >
              {/* Admin Box */}
              <div
                onClick={() => handleNavigation("admin")}
                style={{
                  width: "250px",
                  height: "250px",
                  backgroundColor: "#007bff",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                  cursor: "pointer",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  boxShadow: "0 6px 15px rgba(0, 123, 255, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0, 123, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0, 123, 255, 0.2)";
                }}
              >
                Admin
              </div>

              {/* Merchant Box */}
              <div
                onClick={() => handleNavigation("merchant")}
                style={{
                  width: "250px",
                  height: "250px",
                  backgroundColor: "#28a745",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                  cursor: "pointer",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  boxShadow: "0 6px 15px rgba(40, 167, 69, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(40, 167, 69, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(40, 167, 69, 0.2)";
                }}
              >
                Merchant
              </div>

              {/* Customer Box */}
              <div
                onClick={() => handleNavigation("customer")}
                style={{
                  width: "250px",
                  height: "250px",
                  backgroundColor: "#ffc107",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                  cursor: "pointer",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  boxShadow: "0 6px 15px rgba(255, 193, 7, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(255, 193, 7, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(255, 193, 7, 0.2)";
                }}
              >
                Customer
              </div>
            </div>
          </div>
        </div>
      </Page>
    </PageLayout>
  );
}
