import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://preguntados-api.vercel.app/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

export const API = {
    getDifficulties() {
        return axiosInstance.get("difficulty");
    },
    getQuestions(difficulty) {
        const selected = (difficulty) ? difficulty : "easy";
        return axiosInstance.get("questions?difficulty=" + selected);
    },
    sendAnswer(questionId, option) {
        return axiosInstance.post("/api/answer", { questionId, option })
    },
};