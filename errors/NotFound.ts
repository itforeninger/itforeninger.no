export class NotFoundError extends Error {
  constructor(public slug: string) {
    super();
  }
}
