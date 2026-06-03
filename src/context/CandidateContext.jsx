import { createContext, useContext, useState } from "react";

const CandidateContext = createContext();

export function CandidateProvider({ children }) {
  const [candidates, setCandidates] = useState([
    {
      key: "1",
      name: "John Doe",
      email: "john@gmail.com",
      status: "Applied",
    },
    {
      key: "2",
      name: "Sara Smith",
      email: "sara@gmail.com",
      status: "Shortlisted",
    },
  ]);

  const addCandidate = (candidate) => {
    const newCandidate = {
      key: Date.now().toString(),
      ...candidate,
    };

    setCandidates([...candidates, newCandidate]);
  };

  return (
    <CandidateContext.Provider value={{ candidates, addCandidate }}>
      {children}
    </CandidateContext.Provider>
  );
}

export const useCandidates = () => useContext(CandidateContext);