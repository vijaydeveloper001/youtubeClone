export const checkImage = async (image:any) => {
    try {
      const response = await fetch(image);
      const contentType = response.headers.get('content-type');
      return (contentType?.startsWith('image') ?? false);
    } catch (error) {
      return false
    }
  };
