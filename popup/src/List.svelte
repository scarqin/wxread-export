<script>
  import { generateBookMark } from "./uitils";
  export let userVid;
  let books = [],
    selectedBook;
  function getNoteBooks() {
    fetch("https://i.weread.qq.com/user/notebooks")
      .then((response) => response.json())
      .then((data) => {
        books = data.books.map((val) => val.book);
        selectedBook = books[0].bookId;
      });
  }
  getNoteBooks();
  function handleClick(book) {
    selectedBook = book.bookId;
  }
  function exportBookmarks() {
    if (!selectedBook) return;
    Promise.all(
      [
        `https://i.weread.qq.com/book/bookmarklist?bookId=${selectedBook}`,
        `https://i.weread.qq.com/review/list?bookId=${selectedBook}&mine=1&listType=11&maxIdx=0&count=0&listMode=2&synckey=0&userVid=${userVid}`,
      ].map((url) => fetch(url).then((resp) => resp.json()))
    ).then((data) => {
      let [markData, reviewData] = data;
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(generateBookMark(markData, reviewData))
          .then(() => {
            alert("已复制 Markdown 到粘贴板");
          });
      }
    });
  }
</script>

<div class="mdui-toolbar mdui-appbar mdui-appbar-fixed mdui-color-theme">
  <span class="mdui-typo-title">导出笔记</span>
  <div class="mdui-toolbar-spacer" />
  <button class="mdui-btn mdui-btn-icon" on:click={exportBookmarks}
    ><i class="mdui-icon material-icons">content_copy</i></button
  >
</div>
<div class=" mdui-container book-list-wrap">
  {#each books as book (book.bookId)}
    <div class="mdui-card mdui-col" on:click={() => handleClick(book)}>
      <div class="mdui-card-media">
        <img src={book.cover.replace("s_", "t6_")} alt="cover" />
        <div class="mdui-card-media-covered">
          <div class="mdui-radio pull-right">
            <input type="radio" bind:group={selectedBook} value={book.bookId} />
            <i class="mdui-radio-icon" />
          </div>
        </div>
      </div>
      <div class="mdui-card-actions">
        <div class="mdui-typo-body-2 text-omit">{book.title}</div>
      </div>
    </div>
  {/each}
</div>

<style>
  .pull-right {
    float: right;
  }
  .mdui-radio {
    padding-left: 22px;
  }
  .mdui-radio-icon::after {
    border-color: #fff;
  }
  .text-omit {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .mdui-card {
    padding-top: 8px;
    cursor: pointer;
  }
  .mdui-card img {
    height: 100%;
    object-fit: cover;
  }

  .mdui-container {
    width: 100%;
    padding: 20px;
    padding-top: 80px;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
</style>
