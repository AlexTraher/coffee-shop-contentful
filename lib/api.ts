const POST_GRAPHQL_FIELDS = (preview = false) => `

  headerBannerCollection(preview: ${preview} ) {
      items {
        headerText
        backgroundImage {
          url
        }
      }
  }

`

type Content = {
  headerBanner: {
    headerText: string,
    backgroundImage: {
      url: string,
    }
  }
}

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

const parseRes = (res) => {
  return {
    headerBanner: res.data.headerBannerCollection.items[0]
  };
}

export const getContent = async (preview): Promise<Content> => { 
  const res = await fetchGraphQL(
    `query {
      ${POST_GRAPHQL_FIELDS(preview)}
    }`,
    preview,
  );

  return parseRes(res);
}