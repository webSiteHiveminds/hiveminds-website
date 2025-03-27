/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PortableText } from "@portabletext/react";

const PortableTextComponent = ({ value }) => {
  const ImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value);

    return (
      <img
        src={urlBuilder()
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
          maxWidth: "100%",
          height: "auto",
        }}
      />
    );
  };

  const components = {
    types: {
      image: ImageComponent,
    },
    block: {
      h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
      h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
      h3: ({ children }) => <h3 className="text-2xl font-semibold">{children}</h3>,
      h4: ({ children }) => <h4 className="text-xl font-semibold">{children}</h4>,
      h5: ({ children }) => <h5 className="text-lg font-medium">{children}</h5>,
      h6: ({ children }) => <h6 className="text-base font-medium">{children}</h6>,
      normal: ({ children }) => <p className="text-base leading-relaxed">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-500 pl-4 italic">{children}</blockquote>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      underline: ({ children }) => <span className="underline">{children}</span>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
    },
  };

  return <PortableText value={value} components={components} />;
};

export default PortableTextComponent;
