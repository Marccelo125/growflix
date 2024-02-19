const growcastRow = document.getElementById("growcast-items");
const webinarRow = document.getElementById("webinar-items");
const uxUiRow = document.getElementById("ux-ui-items");
const geralRow = document.getElementById("geral-items");
const iframeMovie = document.getElementById("iframe-movie");
const movieModal = new bootstrap.Modal("#movie-modal", {
  keyboard: false,
});

const growcastItems = movies.filter((item) => item.category === "growcast");
const webinarItems = movies.filter((item) => item.category === "webinar");
const uxUiItems = movies.filter((item) => item.category === "ux-ui");
const geralItems = movies.filter((item) => item.category === "geral");

function renderItems(element, items) {
  element.innerHTML += `
  <div class="col-12 pt-2">
  <p class="fw-bold mb-0 fs-1">
    <a href="#${items}" class="link-growdev text-uppercase">
      ${items[0].category}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"></path>
      </svg>
    </a>
  </p>
</div>
  `;
  items.forEach((item) => {
    element.innerHTML += `
    <div class="col-12 col-sm-6 col-md-3 col-movie">
    <div class="item-hover">
      <img
        src="${item.img}"
        class="img-fluid"
        alt=""
      />
      <p class="detail-movie" data-link="${item.link}" onclick="openMovie(this)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="white"
          class="bi bi-play-circle"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
          />
        </svg>
        <span>${item.title}</span>
      </p>
    </div>
  </div>
          `;
  });
}

function stopIframe() {
  const iframeVideo = document.getElementById('iframe-video').src = "no-link";
}

function openMovie(element) {
  const link = element.getAttribute("data-link");
  iframeMovie.innerHTML = `
  <iframe src="${link}" id="iframe-video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
  movieModal.show();
}

renderItems(growcastRow, growcastItems);
renderItems(webinarRow, webinarItems);
renderItems(uxUiRow, uxUiItems);
renderItems(geralRow, geralItems);


