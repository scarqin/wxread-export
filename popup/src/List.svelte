<script>
  import { formatBookmark } from "./uitils";
  let books = [];
  function getNoteBooks() {
    fetch("https://i.weread.qq.com/user/notebooks")
      .then((response) => response.json())
      .then((data) => {
        books = data.books.map((val) => {
          val.book.checked = false;
          return val.book;
        });
      });
  }
  getNoteBooks();
  function handleClick(book) {
    let bookIndex = books.findIndex((val) => val.bookId === book.bookId);
    console.log("handleClick", bookIndex);
    books[bookIndex].checked = !books[bookIndex].checked;
  }
  function exportBookmarks() {
    let selectedBooks = books
      .filter((val) => val.checked)
      .map((val) => val.bookId);
    fetch("https://i.weread.qq.com/book/bookmarklist")
      .then((response) => response.json())
      .then((data) => {
        formatBookmark(data);
        console.log(data);
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
        <div class="mdui-card-media-covered mdui-card-media-covered-gradient">
          <div class="mdui-checkbox pull-right">
            <input type="checkbox" bind:checked={book.checked} />
            <i class="mdui-checkbox-icon" />
          </div>
        </div>
      </div>
      <div class="mdui-card-actions">
        <div class="mdui-typo-title text-omit">{book.title}</div>
        <div class="mdui-typo-caption-opacity text-omit">{book.author}</div>
      </div>
    </div>
  {/each}
</div>

<style>
  .pull-right {
    float: right;
  }
  .mdui-checkbox {
    padding-left: 22px;
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
  .mdui-typo-caption-opacity {
    margin-top: 8px;
  }
</style>
