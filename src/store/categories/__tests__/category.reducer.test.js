import { categoriesReducer, CATEGORIES_INTIAL_STATE } from "../category.reducer";
import { fetchCategoriesStart, fetchCategoriesFailed, fetchCategoriesSuccess } from "../category.action";

describe('Category reducer tests', () => {
    test('fetchCategoriesStart', () => {
        const expectedState = {
            ...CATEGORIES_INTIAL_STATE,
            isLoading: true
        }
        expect(categoriesReducer(CATEGORIES_INTIAL_STATE, fetchCategoriesStart())).toEqual(expectedState)
    })

    test('fetchCategoriesSuccess', () => {
        const mockData = [
            {
                title: 'mens',
                imageUrl: 'test',
                items: [
                    { id: 1, name: 'Product 1' },
                    { id: 1, name: 'Product 1' }
                ]
            },
            {
                title: 'womens',
                imageUrl: 'test2',
                items: [
                    { id: 3, name: 'Product 3' },
                    { id: 4, name: 'Product 4' }
                ]
            },
        ]

        const expectedState = {
            ...CATEGORIES_INTIAL_STATE,
            isLoading: false,
            categories: mockData
        };

        expect(categoriesReducer(CATEGORIES_INTIAL_STATE, fetchCategoriesSuccess(mockData))).toEqual(expectedState);
    });

    test('fetchCategoriesFailed', () => {
        const mockError = new Error('Error fetching categories');

        const expectedState = {
            ...CATEGORIES_INTIAL_STATE,
            isLoading: false,
            error: mockError,
        };

        expect(categoriesReducer(CATEGORIES_INTIAL_STATE, fetchCategoriesFailed(mockError))).toEqual(expectedState);
    })
})