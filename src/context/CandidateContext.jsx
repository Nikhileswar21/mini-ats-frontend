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
  deleteAllCandidates,
} from "../service/candidateApi";

const CandidateContext = createContext();

export function CandidateProvider({ children }) {
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = async () => {
    try {
      const res = await getCandidates();
      setCandidates(res.data.candidate);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const addCandidate = async (candidate) => {
    try {
      await createCandidate(candidate);
      fetchCandidates();
    } catch (error) {
      console.error("Error adding candidate:", error);
    }
  };

  const editCandidate = async (id, data) => {
    try {
      await updateCandidate(id, data);
      fetchCandidates();
    } catch (error) {
      console.error("Error updating candidate:", error);
    }
  };

  const removeAllCandidates = async () => {
  try {
    await deleteAllCandidates();

    setCandidates([]); // immediately clear UI

    await fetchCandidates();
  } catch (error) {
    console.error("Error deleting all candidates:", error);
  }
};

  const removeCandidate = async (id) => {
    try {
      await deleteCandidate(id);
      fetchCandidates();
    } catch (error) {
      console.error("Error deleting candidate:", error);
    }
  };

  

  return (
    <CandidateContext.Provider
      value={{
        candidates,
        addCandidate,
        editCandidate,
        removeCandidate,
        removeAllCandidates,
        fetchCandidates,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

export const useCandidates = () =>
  useContext(CandidateContext);