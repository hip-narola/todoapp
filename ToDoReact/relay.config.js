module.exports = {
  src: "./src",
  schema: "./schema.graphql",
  language: "typescript",
  artifactDirectory: "./src/__generated__",
  excludes: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"], // Change 'exclude' to 'excludes'
};