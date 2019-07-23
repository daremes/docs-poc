module.exports = {
  sections: [
    {
      name: 'Getting Started',
      content: 'Getting-Started.mdx',
      depth: 0,
      sections: [
        {
          name: 'Konvence komitovani',
          content: 'Commit-Conventions.mdx',
          customPath: 'conventions',
          depth: 1,
        },
        {
          name: 'Dalsi dokument',
          content: 'Other-Document.mdx',
          depth: 1,
        },
      ],
    },
    {
      name: 'Dalsi sekce',
      depth: 0,
      content: 'Section-Neco.mdx',
      sections: [
        {
          name: 'Bezva Veci',
          content: 'Bezva-Veci.mdx',
          depth: 1,
        },
      ]
    }
  ],
};
