const slugify = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

export default slugify;
