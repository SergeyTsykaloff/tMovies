const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a29ab123660db16fae4e46fd99206d5c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;