import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { IFetchConfig, IFetchResponse } from "./types";

// Custom hook for fetching data
export const useFetcher = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetch<T>(config: IFetchConfig): Promise<IFetchResponse<T>> {
    // Set isLoading to true before making the API call
    setIsLoading(true);

    try {
      // Make the API call using axios
      const res: AxiosResponse<T> = await axios({
        method: config.method || "GET",
        baseURL: process.env.BASE_URL,
        url: config.path,
        data: config.data,
      });

      // Simulate a delay of 2.5 seconds before setting isLoading to false
      const fakeProcess = setTimeout(() => setIsLoading(false), 2500);
      clearTimeout(fakeProcess);

      // Return the response data
      return { data: res.data };
    } catch (error) {
      // Log any fetch errors and set isLoading to false
      console.log(`Fetch Error:`, error);
      setIsLoading(false);
      return { error: error as any };
    }
  }

  // Return isLoading state and fetch function
  return { isLoading, fetch };
};