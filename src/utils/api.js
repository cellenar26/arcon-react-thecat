const apiKey = '7d249d44-9480-44af-944e-f87feeb25512'

export const getCatBreeds = async(currentPage, limit = 5) => {
    if (typeof currentPage !== 'number') {
        throw new Error('getCatBreeds 함수의 currentPage param must be number!')
    }
    if (typeof limit !== 'number') {
        throw new Error('getCatBreeds 함수의 limit param must be number!')
    }

    const response = await fetch(`https://api.thecatapi.com/v1/breeds?page=${currentPage}&limit=${limit}`, {
        headers: {
            'x-api-key': apiKey,
        }
    })
    const breeds = await response.json()
    return breeds
}

export const catApiUrl = 'https://api.thecatapi.com/v1'
export const catHeaders = {
    'x-api-key': apiKey,
}