import axios from "axios";

class Util {
  static getQuestionnaires() {
    return axios
      .get("http://123.206.30.153:8080/api/questionnaire_survey/all")
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw new Error("error");
        }
        return data.data;
      });
  }

  static getQuestions(id) {
    return axios
      .get(
        `http://123.206.30.153:8080/api/questionnaire_survey/get?questionnaire_id=${id}`
      )
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw new Error(data);
        }
        return data.data;
      });
  }

  static commit(data) {
    return axios
      .post("http://123.206.30.153:8080/api/questionnaire_survey/commit", data)
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw new Error(data);
        }
        return data.data;
      });
  }
}

export default Util;
