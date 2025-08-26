const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-backend-service.onrender.com" // <-- change for deploy later
    : "http://localhost:5000";

export async function submitContactForm(formData) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    return await res.json();
  } catch (err) {
    console.error("❌ Contact form error:", err);
    return { error: "Network error, please try again later" };
  }
}
