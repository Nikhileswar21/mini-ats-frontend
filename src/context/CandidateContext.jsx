import { createContext, useContext, useState } from "react";

const CandidateContext = createContext();

export function CandidateProvider({ children }) {
  const [candidates, setCandidates] = useState([]);

  const addCandidate = (candidate) => {
    setCandidates((prev) => [
      ...prev,
      {
        key: Date.now().toString(),
        ...candidate,
      },
    ]);
  };

  const updateCandidate = (updatedCandidate) => {
    setCandidates((prev) =>
      prev.map((candidate) =>
        candidate.key === updatedCandidate.key
          ? updatedCandidate
          : candidate
      )
    );
  };

  const deleteCandidate = (key) => {
    setCandidates((prev) =>
      prev.filter((candidate) => candidate.key !== key)
    );
  };

  return (
    <CandidateContext.Provider
      value={{
        candidates,
        addCandidate,
        updateCandidate,
        deleteCandidate,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

export const useCandidates = () => useContext(CandidateContext);