import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const _SanityClient = sanityClient({
  projectId: 'yf8yejw7',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(_SanityClient);

export const urlFor = (source) => builder.image(source);

const CodeBlock = ({ code, lang }) => {


  return (
    <pre data-language={lang} style={{ direction: "ltr" }} >
      <code style={{ direction: "ltr" }}>

        {code}

      </code>
    </pre>
  )
}

export const Serializer = {
  types: {
    mainImage: props => (
      <figure>
        <img
          src={urlFor(props.asset)
            .width(600)
            .url()}
          alt={props.node.alt}
        />

        <figcaption>{props.node.caption}</figcaption>
      </figure>
    ),
    code: props => {
      return (<CodeBlock lang={props.node.language} code={props.node.code}></CodeBlock>)
    },
    list: (props) => {
      alert('hihi')
      return (
        (props.type === "bullet" ? (
          <ul>{props.children}</ul>
        ) : (
          <ol>{props.children}</ol>
        ))
      )

    },

    listItem: (props) =>
      console.log("list", props) ||
      (props.type === "bullet" ? (
        <li>{props.children}</li>
      ) : (
        <li>{props.children}</li>
      )),
    marks: {
      strong: (props) =>
        console.log("strong", props) || <strong>{props.children}</strong>,
      em: (props) => console.log("em", props) || <em>{props.children}</em>,
      code: (props) => console.log("code", props) || <code>{props.children}</code>
    }
  }
};

