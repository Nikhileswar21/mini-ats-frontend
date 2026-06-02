import React, { useState } from "react";

function App() {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      position: "Backend Developer",
      status: "Applied",
    },
    {
      id: 2,
      name: "Sam Wilson",
      email: "sam@gmail.com",
      position: "Frontend Developer",
      status: "Selected",
    },
    {
      id: 3,
      name: "Alex",
      email: "alex@gmail.com",
      position: "DevOps Engineer",
      status: "Rejected",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    status: "Applied",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.position) {
      alert("Please fill all fields");
      return;
    }

    const newCandidate = {
      id: Date.now(),
      ...form,
    };

    setCandidates([...candidates, newCandidate]);

    setForm({
      name: "",
      email: "",
      position: "",
      status: "Applied",
    });
  };

  const deleteCandidate = (id) => {
    setCandidates(candidates.filter((c) => c.id !== id));
  };

  const totalCandidates = candidates.length;
  const applied = candidates.filter(
    (c) => c.status === "Applied"
  ).length;

  const selected = candidates.filter(
    (c) => c.status === "Selected"
  ).length;

  const rejected = candidates.filter(
    (c) => c.status === "Rejected"
  ).length;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Applicant Tracking System
      </h1>

      {/* Dashboard */}
      <h2>Dashboard</h2>

      <div style={styles.cardContainer}>
        <Card title="Total Candidates" value={totalCandidates} />
        <Card title="Applied" value={applied} />
        <Card title="Selected" value={selected} />
        <Card title="Rejected" value={rejected} />
      </div>

      {/* Add Candidate */}
      <div style={styles.section}>
        <h2>Add Candidate</h2>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Position"
            name="position"
            value={form.position}
            onChange={handleChange}
            style={styles.input}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            style={styles.input}
          >
            <option>Applied</option>
            <option>Selected</option>
            <option>Rejected</option>
          </select>

          <button style={styles.button}>
            Add Candidate
          </button>
        </form>
      </div>

      {/* Candidate List */}
      <div style={styles.section}>
        <h2>Candidate List</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>{candidate.position}</td>
                <td>
                  <span
                    style={{
                      ...styles.badge,
                      background:
                        candidate.status === "Selected"
                          ? "#d1fae5"
                          : candidate.status === "Rejected"
                          ? "#fee2e2"
                          : "#fef3c7",
                    }}
                  >
                    {candidate.status}
                  </span>
                </td>

                <td>
                  <button
                    onClick={() =>
                      deleteCandidate(candidate.id)
                    }
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
    background: "#f5f7fb",
    minHeight: "100vh",
  },

  title: {
    marginBottom: "30px",
  },

  cardContainer: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "40px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow:
      "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  section: {
    background: "#fff",
    padding: "25px",
    marginBottom: "30px",
    borderRadius: "12px",
    boxShadow:
      "0 2px 8px rgba(0,0,0,0.1)",
  },

  form: {
    display: "grid",
    gap: "15px",
  },

  input: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },

  button: {
    padding: "12px",
    border: "none",
    background: "#1677ff",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  badge: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: "bold",
  },

  deleteBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default App;