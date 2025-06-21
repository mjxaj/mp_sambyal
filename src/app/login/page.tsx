"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";

const ADMIN_EMAIL = "lucifer.the.gamer.001@gmail.com"; // CHANGE THIS TO YOUR ADMIN EMAIL

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user.email === ADMIN_EMAIL) {
        router.push("/dashboard");
      } else {
        setError("Access denied: Not admin.");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">M.P. Sambyal</h1>
          <p className="text-white opacity-90">Admin Dashboard</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slideIn">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSignInAlt className="text-2xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
            <p className="text-gray-600 mt-2">Enter your credentials to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <>
                  <FaSignInAlt className="mr-2" />
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/")}
              className="text-primary hover:text-primary-dark transition duration-200"
            >
              ← Back to Homepage
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white opacity-80 text-sm">
            Samba District, Jammu and Kashmir
          </p>
          <p className="text-white opacity-60 text-xs mt-1">
            J&K - The Crown of INDIA
          </p>
        </div>
      </div>
    </div>
  );
} 