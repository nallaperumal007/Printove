"use client";

import { Page } from "@shopify/polaris";
import PageLayout from "../components/main-layout";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import StoreCredit from "@/components/store/StoreCredit";
import Login from "@/components/login/Login"
import Wallet from "@/components/wallet/Wallet";

export default function Home() {
  return (
    <PageLayout>
      <Navbar />
      <Login />
      <Wallet />
      <Page fullWidth>
        {/* Main container */}
        <div style={{ display: "flex", height: "100vh", flexDirection: "row" }}>
          {/* Sidebar on the left */}
          <div style={{ width: "250px", backgroundColor: "#f4f6f8", padding: "10px" }}>
            <Sidebar />
          </div>

          {/* StoreCredit content taking the rest of the space */}
          <div style={{ flex: 1, padding: "20px" }}>
            <StoreCredit />
          </div>
        </div>
       
      </Page>
    </PageLayout>
  );
}
