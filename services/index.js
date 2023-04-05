import qs from "qs";

/**
 * Now, strapi will return strings and numbers by default
 * without the need to specify any fields, but in order fetch
 * images as well, we need to explicitly specify the fields.
 * Down below, you can read the "." as "with".
 * For example: WhatWeOffer.Services.Image can be read as "WhatWeOffer with Services with Image"
 * and we use the qs library to build the query string, because strapi supports it as well.
 * The encodeValuesOnly option is used to make the query string more readable.
 */
const hompageQuery = qs.stringify(
  {
    populate: [
      "Hero",
      "WhatWeOffer.Services.Image",
      "AboutKimit",
      "KimitSoftware.Services.Icon",
      "KimitAcademy.AcademyFeatures.Icon",
      "Testimonials.TestimonialCards.CustomerImage",
    ],
  },
  {
    encodeValuesOnly: true,
  }
);

export async function fetchHomepage() {
  const { STRAPI_API_URL } = process.env;
  const url = `${STRAPI_API_URL}/homepage?${hompageQuery}`;
  return await fetchPageData(url);
}

async function fetchPageData(url) {
  const { STRAPI_API_TOKEN } = process.env;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  });

  const data = await response.json();
  return data;
}
