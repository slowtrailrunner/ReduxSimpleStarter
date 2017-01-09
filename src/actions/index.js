export function selectBook(book) {
  // SelectBook is a n action creator and needs to return an action
  // an object with a type property
  // this is like a message
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}