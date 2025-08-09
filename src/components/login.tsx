import React, { useState } from "react";
import "./login.css"; // Import your styles

const login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"signIn" | "createAccount">("signIn");

  return (
    <>
      <header className="header">
        <img src="cat.jpg" alt="MediScan Logo" className="logo" />
      </header>

      <main>
        <div className="container">
          <h1>MediScan</h1>
          <p className="subtitle">Medical Record Verification System</p>

          <div className="card">
            <h2>
              <span className="icon">&#x1F3E5;</span> Access MediScan
            </h2>
            <p>Sign in to your account or create a new one</p>

            <div className="tab-buttons">
              <button
                className={`tab ${activeTab === "signIn" ? "active" : ""}`}
                onClick={() => setActiveTab("signIn")}
              >
                Sign In
              </button>
              <button
                className={`tab ${activeTab === "createAccount" ? "active" : ""}`}
                onClick={() => setActiveTab("createAccount")}
              >
                Create Account
              </button>
            </div>

            {/* Sign In Form */}
            {activeTab === "signIn" && (
              <form id="signInForm">
                <div className="input-group">
                  <label htmlFor="signin-email">Email address</label>
                  <input
                    type="email"
                    id="signin-email"
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="signin-password">Password</label>
                  <input
                    type="password"
                    id="signin-password"
                    required
                    placeholder="Enter your password"
                  />
                </div>

                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
                <button type="submit" className="primary-btn">
                  Sign in
                </button>
              </form>
            )}

            {/* Create Account Form */}
            {activeTab === "createAccount" && (
              <form id="createAccountForm">
                <h3>Personal Information</h3>
                <div className="row">
                  <div className="input-group">
                    <label htmlFor="first-name">First Name *</label>
                    <input
                      type="text"
                      id="first-name"
                      required
                      placeholder="First name"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="middle-name">Middle Name</label>
                    <input
                      type="text"
                      id="middle-name"
                      placeholder="Middle name"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="last-name">Last Name *</label>
                    <input
                      type="text"
                      id="last-name"
                      required
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <h3>Professional Information</h3>
                <div className="row">
                  <div className="input-group">
                    <label htmlFor="role">Role *</label>
                    <select id="role" required>
                      <option value="">Select your role</option>
                      <option>Doctor</option>
                      <option>Nurse</option>
                      <option>Technician</option>
                      <option>Admin</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label htmlFor="department">Department</label>
                    <input
                      type="text"
                      id="department"
                      placeholder="e.g., Cardiology, Emergency"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="input-group">
                    <label htmlFor="license-number">License Number</label>
                    <input
                      type="text"
                      id="license-number"
                      placeholder="Professional license number"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="hospital-id">Hospital ID</label>
                    <input
                      type="text"
                      id="hospital-id"
                      placeholder="Employee/Hospital ID"
                    />
                  </div>
                </div>

                <h3>Contact Information</h3>
                <div className="row">
                  <div className="input-group">
                    <label htmlFor="account-email">Email *</label>
                    <input
                      type="email"
                      id="account-email"
                      required
                      placeholder="Professional email"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input
                      type="tel"
                      id="phone-number"
                      placeholder="Contact number"
                    />
                  </div>
                </div>

                <h3>Security</h3>
                <div className="row">
                  <div className="input-group">
                    <label htmlFor="account-password">Password *</label>
                    <input
                      type="password"
                      id="account-password"
                      required
                      placeholder="Create password"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password *</label>
                    <input
                      type="password"
                      id="confirm-password"
                      required
                      placeholder="Confirm password"
                    />
                  </div>
                </div>

                <button type="submit" className="primary-btn">
                  Create Account
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default login;
