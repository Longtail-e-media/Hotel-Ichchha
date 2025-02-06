// import { useState, useEffect } from "react";

// const useFetchApi = (url, cacheKey) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Check if the data exists in localStorage
//         const cachedData = localStorage.getItem(cacheKey);
//         if (cachedData) {
//           setData(JSON.parse(cachedData)); // Use cached data
//           setLoading(false);
//           return;
//         }

//         // Fetch the raw JS code
//         const response = await fetch(url);
//         const jsCode = await response.text();

//         // Extract the array from the JS code
//         const match = jsCode.match(/const\s+\w+\s*=\s*(\[\s*[\s\S]*?\s*\]);/);
//         if (match && match[1]) {
//           const parsedData = eval(match[1]); // Safely evaluate the array
//           setData(parsedData);

//           // Store parsed data in localStorage
//           localStorage.setItem(cacheKey, JSON.stringify(parsedData));
//         } else {
//           throw new Error("Unexpected API response format.");
//         }
//       } catch (err) {
//         setError(err.message || "Failed to fetch data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url, cacheKey]);

//   return { data, loading, error };
// };

// export default useFetchApi;

import { useState, useEffect } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const text = await response.text();

        // Try parsing JSON directly
        try {
          const jsonData = JSON.parse(text);
          setData(jsonData);
        } catch {
          // If JSON parsing fails, try parsing as JavaScript object
          const jsMatch = text.match(/const\s+\w+\s*=\s*(\{[\s\S]*?\}|\[[\s\S]*?\]);/);
          if (jsMatch && jsMatch[1]) {
            const parsedData = new Function(`return ${jsMatch[1]};`)();
            setData(parsedData);
          } else {
            throw new Error("API response format is incorrect or unexpected.");
          }
        }
      } catch (err) {
        setError(err.message || "Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchApi;
