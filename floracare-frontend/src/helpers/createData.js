const createData = async (url, method, payload, expectedStatusCode) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      // Check if the response status is as expected
      if (response.status === expectedStatusCode) {
        const data = await response.json();
        return data; // Return the response data
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Error while sending request:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  };

  export default createData;
  