export const isValidCreateEvent = (
  title: string,
  category: string,
  start: string,
  end: string,
  price: string,
  file: any,
  desc: string,
  loc: string
) => {
  if (
    title.length !== 0 &&
    category.length !== 0 &&
    start.length !== 0 &&
    end.length !== 0 &&
    price.length !== 0 &&
    file.length !== 0 &&
    desc.length !== 0 &&
    loc.length !== 0
  ) {
    return true;
  }
  return false;
};
