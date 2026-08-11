const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost/api';

export interface Review {
    id: number;
    project_name: string;
    text: string;
    author_name: string;
    author_position: string;
    author_avatar?: string;
}

export interface PaginationData {
    page: number;
    per_page: number;
    total: number;
    last_page: number;
}

export interface ReviewsResponse {
    message: string;
    data: {
        pagination: PaginationData;
        items: Review[];
    };
}

export const getReviews = async (page: number = 1): Promise<ReviewsResponse> => {
    const response = await fetch(`${API_BASE_URL}/reviews?page=${page}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const getAllReviews = async (): Promise<Review[]> => {
    const response = await fetch(`${API_BASE_URL}/reviews/all`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ReviewsResponse = await response.json();
    return data.data.items;
};