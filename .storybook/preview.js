export const decorators = [
  (story, context) => ({
    template: `
      <div style="backgroundColor: gray; padding: 10px">
        <story />
      </div>
    `,
  }),
]
