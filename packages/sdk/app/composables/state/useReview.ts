import type {
  Review,
  AddReviewInput,
  Rating,
  ReviewsListInput
} from '@thunderstorefront/types';

export interface UseReview {
  fetchReviews: (
    productId: string,
    input?: ReviewsListInput
  ) => Promise<Review[]>;
  addReview: (productId: string, input: AddReviewInput) => Promise<Review>;
  fetchReviewRating: () => Promise<Rating[]>;
}

export function useReview(): UseReview {
  const client = useClient();

  async function fetchReviews(
    productId: string,
    input?: ReviewsListInput
  ): Promise<Review[]> {
    return await client(`/api/reviews/${productId}`, {
      query: input
    });
  }

  async function addReview(
    productId: string,
    input: AddReviewInput
  ): Promise<Review> {
    return await client(`/api/review/add`, {
      method: 'POST',
      body: {
        productId,
        input
      }
    });
  }

  async function fetchReviewRating(): Promise<Rating[]> {
    return await client(`/api/review/rating`);
  }

  return {
    fetchReviews,
    addReview,
    fetchReviewRating
  };
}
