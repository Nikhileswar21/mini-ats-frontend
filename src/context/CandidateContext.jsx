import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import {
  getCandidates,
  createCandidate,
  updateCandidate,
  deleteCandidate,
} from "../service/candidateApi";

const CandidateContext = createContext();

export function CandidateProvider({ children }) {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = async () => {
    const res = await getCandidates();

    setCandidates(res.data.candidate);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const addCandidate = async (candidate) => {
    await createCandidate(candidate);

    fetchCandidates();
  };

  const editCandidate = async (id, data) => {
    await updateCandidate(id, data);

    fetchCandidates();
  };

  const removeCandidate = async (id) => {
    await deleteCandidate(id);

    fetchCandidates();
  };

  return (
    <CandidateContext.Provider
      value={{
        candidates,
        addCandidate,
        editCandidate,
        removeCandidate,
        fetchCandidates,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

export const useCandidates = () =>
  useContext(CandidateContext);