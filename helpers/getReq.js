// post request helpers boiler plate

const getReq = async (url) => {
  // headers
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append(
    "Authorization",
    `Bearer ${process.env.NEXT_PUBLIC_BLOG_TOKEN}`
  );

  // fetch
  const req = await fetch(`${process.env.NEXT_PUBLIC_BLOG_SITE_DOMAIN}${url}`, {
    method: "GET",
    headers: headers,
  });

  const serverRes = await req.json();
  return serverRes;
};

export default getReq;
