// 페이지네이션 관련 변수
const itemsPerPage = 5; // 한 페이지에 표시할 항목 수
let currentPage = 1; // 현재 페이지

// 페이지네이션을 처리하는 함수
function displayMoviesByPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // 여기에 startIndex부터 endIndex까지의 영화 목록을 가져와서 표시하는 코드를 작성
    // 예를 들어, API 호출이나 데이터 처리 등을 수행
    const movies = ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5']; // 예시 영화 목록
    
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';
    
    for (let i = startIndex; i < endIndex && i < movies.length; i++) {
        const movieItem = document.createElement('div');
        movieItem.textContent = movies[i];
        moviesContainer.appendChild(movieItem);
    }
}

// 페이지 클릭 이벤트 처리
document.getElementById('pagination').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        currentPage = parseInt(event.target.dataset.page);
        displayMoviesByPage(currentPage);
    }
});

// 초기 페이지 로드 시 첫 페이지의 영화 목록 표시
displayMoviesByPage(currentPage);
