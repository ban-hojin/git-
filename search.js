const searchIcon = document.querySelector(".searchIcon");
const searchInput = document.querySelector(".searchInput");

searchIcon.addEventListener("click", () => {
  searchIcon.classList.add("active");
  searchInput.classList.add("active");
});

const getMoviesByKeyword = async () => {
  const keyword = searchInput.value;
  console.log("keyword", keyword);
  url = new URL(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}&region=KR&api_key=05a7f2a33892226fb4d304127668abdc`
  );

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("keyword", data);
    newsList = data.results;
    render();
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};