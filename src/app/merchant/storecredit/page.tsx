"use client";

import React from "react";
import PageLayout from "@/components/main-layout";
import Navbar from "@/components/navbar";
import Sidebar from "./../../../components/merchant/sidebar/Sidebar";
import StoreCredit from "@/components/store/StoreCredit";

const Store: React.FC = () => {
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
            <StoreCredit />
         
        
               

           </div>
      </div>
    </PageLayout>
  );
};

export default Store;
