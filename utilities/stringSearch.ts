const stringSearch = (source: string, query: string): boolean => {
  const parsedSource = source.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const parsedQuery = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return parsedSource.toLowerCase().indexOf(parsedQuery.toLowerCase()) >= 0;
};

export default stringSearch;
