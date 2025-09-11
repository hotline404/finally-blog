require("dotenv").config();
const { notion_key, notion_version } = require("./env.js");

module.exports = {
  postDBOptions: {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: notion_key,
      "Notion-Version": notion_version,
    },
    body: JSON.stringify({
      filter: {
        property: "category",
        status: {
          equals: "post",
        },
      },
    }),
  },

  postInfoOption: {
    method: 'POST',
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: notion_key,
      "Notion-Version": notion_version,
    },

    body: JSON.stringify({
      filter: {
        property: "category",
        status: {
          equals: "info"
        }
      }
    })
  }
};
