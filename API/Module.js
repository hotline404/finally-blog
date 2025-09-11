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
      filter: { property: "상태", status: {
        equals: "공개"
      }, property: "category", status: {
        equals: "post"
      } },
    }),
  },
};
