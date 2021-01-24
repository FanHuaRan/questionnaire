import axios from "axios";

class Util {
  static getQuestionnaires() {
    return axios.get("/api/questionnaire_survey/all").then(result => {
      const { data } = result;
      if (data.code !== 20000) {
        throw new Error("error");
      }
      return data.data;
    });
  }

  static getQuestions(id) {
    return axios
      .get(`/api/questionnaire_survey/get?questionnaire_id=${id}`)
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw new Error(data);
        }
        return data.data;
      });
  }

  static commit(data) {
    return axios.post("/api/questionnaire_survey/commit", data).then(result => {
      const { data } = result;
      if (data.code !== 20000) {
        throw new Error(data);
      }
      return data.data;
    });
  }
}

export default Util;
