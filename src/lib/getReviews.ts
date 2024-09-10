export const getReviews = async () => {
   try {
      const res = await fetch(
         `https://66e0453b2fb67ac16f29020f.mockapi.io/reviews/reviews`,
      );
      const data = await res.json();
      return data;
   } catch (error) {
      console.log(error);
   }
};
