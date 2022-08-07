import React from 'react';
import Head from 'next/head';
import {NextScript} from "next/document";

export default function SEO({
  description = 'I am a Full stack developer, A PhD researcher and a computer science teacher\n' +
  '            I have been talking to computers since I was 12 years old and I still enjoy it' +
  '            contact me if you need IT consulting, or new member in your IT team',
  author = 'Oualid KHIAL',
  meta,
  title = 'YouIT Department DZ',
}) {

  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      name : "keywords",
      content:  "IT Consulting, IT Services, Algeria, Startup, Software development, Full stack developer",
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `creator`,
      content: author,
    }
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      <meta http-equiv='content-language' content='en-gb'/>
      <NextScript
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-8L31KNNS3F`}
      />
      <NextScript
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8L31KNNS3F', {
              page_path: window.location.pathname,
            });
          `,
          }}
      />
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
