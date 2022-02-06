export const formatBookmark = (inBookmarks) => {
  const REVIEWS = { reviews: [] };
  let bookMarkObj = {};
  for (var i = inBookmarks.chapters.length - 1; i >= 0; i--) {
    let chapterItem = inBookmarks.chapters[i];
    bookMarkObj[chapterItem.chapterUid] = Object.assign(
      {
        marks: [],
      },
      chapterItem
    );
    bookMarkObj[chapterItem.chapterUid].marks = inBookmarks.updated.filter(
      (mark) => mark.chapterUid === chapterItem.chapterUid
    );
  }
  for (var i = REVIEWS.reviews.length - 1; i >= 0; i--) {
    let reviewItem = REVIEWS.reviews[i].review;
    bookMarkObj[reviewItem.chapterUid] =
      bookMarkObj[reviewItem.chapterUid] ||
      Object.assign({
        marks: [],
      });
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
  // 通过 range 来排序标注/评论
  console.log(bookMarkObj)
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
};
