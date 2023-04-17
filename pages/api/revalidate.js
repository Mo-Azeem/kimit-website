export default async function revalidate(req, res) {
  try {
    console.log("REVALIDATING NEW CMS DATA");

    await res.revalidate("/");
    await res.revalidate("/Software");


    console.log("REVALIDATING DONE");
    res.status(200).json({ revalidated: true });
  } catch (err) {
    console.log(err);

    return res.status(500).send({ revalidated: false });
  }
}
