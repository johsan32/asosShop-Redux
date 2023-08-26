
export const options = {
    //method: 'GET',
    //url: 'https://asos2.p.rapidapi.com/products/v2/list',
    params: {
      store: 'US',
      offset: '0',
      categoryId: '4209',
      limit: '48',
      country: 'US',
      sort: 'freshness',
      currency: 'USD',
      sizeSchema: 'US',
      lang: 'en-US'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }
  };