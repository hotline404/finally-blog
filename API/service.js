const { notion_key, notion_DB, notion_data_source } = require("./env.js");
const { Client } = require("@notionhq/client");

const { postDBOptions } = require("./Module.js");

const notion = new Client({
  auth: notion_key,
  request_timeout: 100000,
});

exports.getNotion = async function () {
  const { results } = await notion.databases.query({
    database_id: notion_DB,
    filter: {
      property: "상태",
      status: {
        equals: "공개",
      },
    },
  });

  const post = results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.date,
      allProperties: page.properties,
      icon: page.icon.emoji,
    };
  });

  return post;
};

exports.getPost = async function (page_id) {
  const { results } = await notion.blocks.children.list({
    block_id: page_id,
    page_size: 70,
  });

  return results;
};

// 제목 검색
exports.getSearchQuery = async function (query) {
  const { results } = await notion.search({
    query: query,
  });
  const post = results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.date,
      allProperties: page.properties,
      icon: page.icon.emoji,
    };
  });

  return post;
};

exports.getInfo = async function () {
  const { results } = await notion.databases.query({
    database_id: notion_DB,
    filter: {
      property: "category",
      select: {
        equals: "info",
      },
    },
  });

  const infomations = results.map((info) => {
    return {
      key: info.properties.Name.title[0].text.content,
      value: info.properties.info_data.multi_select.map((e) => {
        return e.name;
      }),
    };
  });

  return infomations;
};

exports.fetchDataBase = async function () {
  const { results } = await fetch(
    `https://api.notion.com/v1/data_sources/${notion_data_source}/query`,
    postDBOptions
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));

  const post = results.filter(page => page.properties['상태'].status.name === "공개").map((page) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      date: page.properties.date,
      allProperties: page.properties['상태'].status.name,
      icon: page.icon.emoji,
    };
  });

  return post;
};
