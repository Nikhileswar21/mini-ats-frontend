import axios from "axios";

const API_URL = "http://localhost:8000/candidates";

export const getCandidates = () =>
  axios.get(API_URL);

export const createCandidate = (data) =>
  axios.post(API_URL, data);

export const updateCandidate = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteCandidate = (id) =>
  axios.delete(`${API_URL}/${id}`);