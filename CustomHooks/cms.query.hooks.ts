import { metaFn } from "@/Api/Functions/metadata.api";
import { useQuery } from "@tanstack/react-query";

export const metaQuery = (url: string, isEnabled: boolean) => {
    return useQuery({
      queryKey: ["METATAGS", url],
      queryFn: () => metaFn(url),
      enabled: isEnabled, 
      retry: 1,
      staleTime: 5 * 60 * 1000,
    });
  };
  