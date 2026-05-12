import { useQuery } from '@tanstack/react-query';
import { musicians } from '@/lib/musicians-data';

export const useMusicians = () => {
  return useQuery({
    queryKey: ['musicians'],
    queryFn: async () => musicians,
  });
};
