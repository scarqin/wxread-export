class Book {
  constructor() {
    this.book={};
    this.marks = [];
  }
  getMarks(type = "markdown") {}
}
/**
 * 生成评论
 * @param {object} inReviewData
 * @param {object} bookMarkObj
 */
const generateReview = (inReviewData, bookMarkObj) => {
  for (var i = inReviewData.reviews.length - 1; i >= 0; i--) {
    let reviewItem = inReviewData.reviews[i].review;
    bookMarkObj[reviewItem.chapterUid] =
      bookMarkObj[reviewItem.chapterUid] ||
      Object.assign({
        marks: [],
      });
    // sort by range
    let sameMarksItem = bookMarkObj[reviewItem.chapterUid].marks.find(
      (marksItem) => reviewItem.range === marksItem.range
    );
    if (sameMarksItem) {
      sameMarksItem.reviewText = reviewItem.content;
    } else {
      let tmpMarkItem = {
        range: reviewItem.range,
        markText: reviewItem.abstract,
        reviewText: reviewItem.content,
      };
      if (bookMarkObj[reviewItem.chapterUid]) {
        bookMarkObj[reviewItem.chapterUid].marks.push(tmpMarkItem);
      } else {
        bookMarkObj[reviewItem.chapterUid] = {
          marks: [tmpMarkItem],
          chapterUid: reviewItem.chapterUid,
          title: reviewItem.chapterTitle,
        };
      }
    }
  }
};
/**
 * 生成划线笔记
 * @param {object} inMarkData
 * @param {object} bookMarkObj
 */
const generateMark = (inMarkData, bookMarkObj) => {
  for (var i = inMarkData.chapters.length - 1; i >= 0; i--) {
    let chapterItem = inMarkData.chapters[i];
    bookMarkObj[chapterItem.chapterUid] = Object.assign(
      {
        marks: [],
      },
      chapterItem
    );
    bookMarkObj[chapterItem.chapterUid].marks = inMarkData.updated.filter(
      (mark) => mark.chapterUid === chapterItem.chapterUid
    );
  }
};
const getMardown = (bookMarkObj) => {
  let markdownText = "";
  Object.keys(bookMarkObj).forEach((chapterUid) => {
    if (!bookMarkObj[chapterUid].marks.length) return;
    if (bookMarkObj[chapterUid].title) {
      markdownText += `### ${bookMarkObj[chapterUid].title}\n`;
    }
    bookMarkObj[chapterUid].marks.forEach((markItem) => {
      if (markItem.markText) {
        markdownText += `* ${markItem.markText}\n\n`;
      }
      if (markItem.reviewText) {
        markdownText += `>>${markItem.reviewText}\n\n`;
      }
    });
  });
  return markdownText;
};
/**
 * 生成一本书的笔记
 * @param {object} inMarkData
 * @param {object} bookMarkObj
 */
export const generateBookMark = (
  inMarkData,
  inReviewData = { reviews: [] }
) => {
  let bookMarkObj = {};
  generateMark(inMarkData, bookMarkObj);
  generateReview(inReviewData, bookMarkObj);
  return getMardown(bookMarkObj);
};
/**
 * 按照书籍 ID 分类笔记信息
 * @param {object} inMarkDatas
 */
export const classifyBookmarklist = (inMarkDatas, bookIDs) => {
  console.log(inMarkDatas)
  let bookByID = {};
  bookIDs.forEach((id) => {
    bookByID[id] = Object.assign(
      {},
      inMarkDatas.books.find((val) => val.bookId === id)
    );
    bookByID[id].updated = inMarkDatas.updated.filter((val) => val.bookId === id);
    bookByID[id].chapters = inMarkDatas.chapters.filter(
      (val) => val.bookId === id
    );
  });
  return bookByID;
};
