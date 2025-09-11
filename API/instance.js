require("dotenv").config();

module.exports = {
  notion_key: process.env.NOTION_KEY,

  notion_DB: process.env.NOTION_DB,

  notion_token_v2: process.env.TOKEN_V2,

  notion_user_id: process.env.USER_ID,
}

