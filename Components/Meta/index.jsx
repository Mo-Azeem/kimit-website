import Head from "next/head";

export default function Meta({ seo, pageTitle }) {
  return (
    <Head>
      <title>
        {seo.seoTitle ?? "Kimit"} 
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content={seo.seoDescription ?? "Kimit Innovation"}
      />
      <meta
        name="keywords"
        content={seo.seokeywords ?? "Kimit Software House"}
      />

      {/* <meta property="og:title" content="Orcabits | Custom Software Development Company" />
            <meta property="og:description" content="Orcabits software helps companies and individuals build better software faster to market. With a comprehensive tech stack and flexible approaches, we solve your unique business challenges." />
            <meta property="og:image" content={`https://orcabits.com${og_img.src}`} />
            <meta property="og:url" content="https://orcabits.com" />
            <meta property="og:site_name" content="Orcabits" />
            <meta property="og:type" content="website" /> */}
    </Head>
  );
}
