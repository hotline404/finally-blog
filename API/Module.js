require("dotenv").config();


module.exports = {
  postDBOptions: {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: process.env.NOTION_KEY,
      "Notion-Version": "2025-09-03"
    },
    body: JSON.stringify({
    }),
  },
};
