const QUESTIONNAIRES = {
  code: 20000,
  data: [
    {
      id: 1,
      name: "问卷1"
    },
    {
      id: 2,
      name: "问卷2"
    },
    {
      id: 3,
      name: "问卷3"
    },
    {
      id: 4,
      name: "问卷4"
    },
    {
      id: 5,
      name: "问卷5"
    },
    {
      id: 6,
      name: "问卷6"
    },
    {
      id: 7,
      name: "问卷7"
    },
    {
      id: 8,
      name: "问卷8"
    }
  ]
};

const QUESTIONS = {
  code: 20000,
  data: {
    id: 1,
    name: "问卷",
    questions: [
      {
        questionDesc: "名下是否有车",
        questionOptions: [
          {
            optionDesc: "有",
            optionSeq: 1
          },
          {
            optionDesc: "无",
            optionSeq: 2
          }
        ],
        seq: 1
      },
      {
        questionDesc:
          "当前欠债情况当前欠债情况当前欠债情况当前欠债情况当前欠债情况当前欠债情况当前欠债情况当前欠债情况当前欠债情况当前欠债情况当前欠债情况当前欠债情况",
        questionOptions: [
          {
            optionDesc: "小于1万",
            optionSeq: 1
          },
          {
            optionDesc: "大于1万小于10万",
            optionSeq: 2
          },
          {
            optionDesc: "大于10万小于100万",
            optionSeq: 3
          },
          {
            optionDesc: "大于100万",
            optionSeq: 4
          }
        ],
        seq: 2
      },
      {
        questionDesc: "名下是否有车",
        questionOptions: [
          {
            optionDesc: "有",
            optionSeq: 1
          },
          {
            optionDesc: "无",
            optionSeq: 2
          }
        ],
        seq: 3
      },
      {
        questionDesc: "当前欠债情况",
        questionOptions: [
          {
            optionDesc: "小于1万",
            optionSeq: 1
          },
          {
            optionDesc:
              "大于1万小于10万大于1万小于10万大于1万小于10万大于1万小于10万大于1万小于10万",
            optionSeq: 2
          },
          {
            optionDesc: "大于1万小于10万大于1万小于10万大于1万小于10万",
            optionSeq: 3
          },
          {
            optionDesc: "大于1万小于10万",
            optionSeq: 4
          }
        ],
        seq: 4
      },
      {
        questionDesc: "名下是否有车",
        questionOptions: [
          {
            optionDesc: "有",
            optionSeq: 1
          },
          {
            optionDesc: "无",
            optionSeq: 2
          }
        ],
        seq: 5
      },
      {
        questionDesc: "当前欠债情况",
        questionOptions: [
          {
            optionDesc: "小于1万",
            optionSeq: 1
          },
          {
            optionDesc: "大于1万小于10万",
            optionSeq: 2
          },
          {
            optionDesc: "大于10万小于100万",
            optionSeq: 3
          },
          {
            optionDesc: "大于100万",
            optionSeq: 4
          }
        ],
        seq: 6
      },
      {
        questionDesc: "名下是否有车",
        questionOptions: [
          {
            optionDesc: "有",
            optionSeq: 1
          },
          {
            optionDesc: "无",
            optionSeq: 2
          }
        ],
        seq: 7
      },
      {
        questionDesc: "当前欠债情况",
        questionOptions: [
          {
            optionDesc: "小于1万",
            optionSeq: 1
          },
          {
            optionDesc: "大于1万小于10万",
            optionSeq: 2
          },
          {
            optionDesc: "大于10万小于100万",
            optionSeq: 3
          },
          {
            optionDesc: "大于100万",
            optionSeq: 4
          }
        ],
        seq: 8
      },
      {
        questionDesc: "名下是否有车",
        questionOptions: [
          {
            optionDesc: "有",
            optionSeq: 1
          },
          {
            optionDesc: "无",
            optionSeq: 2
          }
        ],
        seq: 9
      },
      {
        questionDesc: "当前欠债情况",
        questionOptions: [
          {
            optionDesc: "小于1万",
            optionSeq: 1
          },
          {
            optionDesc: "大于1万小于10万",
            optionSeq: 2
          },
          {
            optionDesc: "大于10万小于100万",
            optionSeq: 3
          },
          {
            optionDesc: "大于100万",
            optionSeq: 4
          }
        ],
        seq: 10
      }
    ]
  }
};

const ANSWERS = {
  code: 20000,
  data: {
    matchBanks: [
      {
        bankId: 1,
        bankName: "中国银行",
        policies: [
          "政策1:xxxxxxxxxxxxxxxxxxxxxx",
          "政策2:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx"
        ]
      },
      {
        bankId: 2,
        bankName: "邮政银行",
        policies: [
          "政策1:xxxxxxxxxxxxxxxxxxxxxx",
          "政策2:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxx"
        ]
      }
    ]
  }
};

const ERROR = {
  code: 50000,
  name: "system error",
  detail: "系统异常"
};

const LOGIN_SUCCESS = {
  code: 20000,
  data: {
    access_token: "xxxxxx"
  }
};

const LOGIN_FAILED = {
  code: 40006,
  error: "unauthorized"
};

const TIMEOUT = {
  code: 40001
};

module.exports = {
  QUESTIONNAIRES,
  QUESTIONS,
  ANSWERS,
  ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  TIMEOUT
};
