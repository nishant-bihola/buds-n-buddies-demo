export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  isBestSeller?: boolean;
  category: string;
  color?: string;
  splashImage?: string;
}

export interface Review {
  id: string;
  reviewerName: string;
  rating: number;
  title?: string;
  content: string;
  isVerified: boolean;
  date: string;
}
