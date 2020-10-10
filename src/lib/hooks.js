import { useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo(
    () =>
      Array.from(searchParams.keys()).reduce(
        (memo, key) => ({ ...memo, [key]: searchParams.get(key) }),
        {}
      ),
    [searchParams]
  );

  const setQuery = useCallback(
    (newQuery) => {
      Object.keys(newQuery).forEach((key) => {
        if (Object.hasOwnProperty.call(newQuery, key)) {
          if (newQuery[key] === null) {
            searchParams.delete(key);
            return;
          }
          searchParams.set(key, newQuery[key]);
        }
      });

      setSearchParams(searchParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  return [query, setQuery];
}
