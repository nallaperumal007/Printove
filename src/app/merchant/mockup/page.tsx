"use client";

import React from "react";
import PageLayout from "@/components/main-layout";
import Navbar from "@/components/navbar";
import Sidebar from "./../../../components/merchant/sidebar/Sidebar";

const Mockup: React.FC = () => {
  return (
    <PageLayout>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "calc(100vh - 60px)", // Adjust height to exclude Navbar height
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: "250px",
            backgroundColor: "#f8f9fa",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      
          }}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            Product Details
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "30px" }}>
            Welcome to the Admin Dashboard! Manage users, view reports, and
            configure settings effortlessly.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* User Management Card */}
            <div
              style={{
                background: "#f9f9f9",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                User Management
              </h2>
              <p style={{ marginBottom: "15px", color: "#666" }}>
                Add, edit, or delete users efficiently.
              </p>
              <button
                onClick={() => alert("Navigating to User Management")}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Manage Users
              </button>
            </div>

            {/* Reports Card */}
            <div
              style={{
                background: "#f9f9f9",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Reports
              </h2>
              <p style={{ marginBottom: "15px", color: "#666" }}>
                Analyze key metrics and trends.
              </p>
              <button
                onClick={() => alert("Navigating to Reports")}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                View Reports
              </button>
            </div>

            {/* Settings Card */}
            <div
              style={{
                background: "#f9f9f9",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Settings
              </h2>
              <p style={{ marginBottom: "15px", color: "#666" }}>
                Customize system preferences.
              </p>
              <button
                onClick={() => alert("Navigating to Settings")}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Manage Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Mockup;
