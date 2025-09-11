require("dotenv").config();


module.exports = {
  postDBOptions: {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: process.env.NOTION_KEY,
    },
    body: JSON.stringify({
    }),
  },
};
