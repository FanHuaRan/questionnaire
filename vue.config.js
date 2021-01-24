const { QUESTIONNAIRES, QUESTIONS, ANSWERS } = require("./mocks/MockData");

module.exports = {
  configureWebpack: {
    devServer: {
      before: function(app) {
        app.get("/api/questionnaire_survey/all", (req, res) => {
          res.json(QUESTIONNAIRES);
        });

        app.get("/api/questionnaire_survey/get", (_req, res) => {
          const { questionnaire_id } = _req.query;
          res.json(
            Object.assign(QUESTIONS, {
              id: questionnaire_id,
              name: QUESTIONS.name + questionnaire_id
            })
          );
        });

        app.post("/api/questionnaire_survey/commit", (_req, res) => {
          res.json(ANSWERS);
        });
      }
    }
  }
};
