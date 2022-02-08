class Book {
  constructor(inMarkData, inReviewData) {
    this.book = inMarkData.book;
    this.chapters = inMarkData.chapters;
    this.markByChapterUid = {};
    this.generateMark(inMarkData.updated);
    this.generateReview(inReviewData.reviews);
  }
  getText(type = "markdown") {
    let result = "";
    Object.keys(this.markByChapterUid).forEach((chapterUid) => {
      if (!this.markByChapterUid[chapterUid].marks.length) return;
      if (this.markByChapterUid[chapterUid].title) {
        result += `## ${this.markByChapterUid[chapterUid].title}\n`;
      }
      this.markByChapterUid[chapterUid].marks.forEach((markItem) => {
        if (markItem.reviewText) {
          result += `${markItem.reviewText}\n`;
        }
        if (markItem.markText) {
          result += `>${markItem.markText}\n\n<hr>\n\n`;
        }
      });
    });
    return result;
  }
  /**
   * 生成划线笔记
   */
  generateMark(marks) {
    for (var i = this.chapters.length - 1; i >= 0; i--) {
      let chapterItem = this.chapters[i];
      this.markByChapterUid[chapterItem.chapterUid] = Object.assign(
        {
          marks: [],
        },
        chapterItem
      );
      this.markByChapterUid[chapterItem.chapterUid].marks = marks
        .filter((mark) => mark.chapterUid === chapterItem.chapterUid)
        .sort(
          (a, b) =>
            Number(a.range.split("-")[0]) - Number(b.range.split("-")[0])
        );
    }
  }
  /**
   * 生成评论
   */
  generateReview(reviews) {
    for (var i = reviews.length - 1; i >= 0; i--) {
      let reviewItem = reviews[i].review;
      this.markByChapterUid[reviewItem.chapterUid] =
        this.markByChapterUid[reviewItem.chapterUid] ||
        Object.assign({
          marks: [],
        });
      // sort by range
      let sameMarksItem = this.markByChapterUid[
        reviewItem.chapterUid
      ].marks.find((marksItem) => reviewItem.range === marksItem.range);
      if (sameMarksItem) {
        sameMarksItem.reviewText = reviewItem.content;
      } else {
        let tmpMarkItem = {
          range: reviewItem.range,
          markText: reviewItem.abstract,
          reviewText: reviewItem.content,
        };
        if (this.markByChapterUid[reviewItem.chapterUid]) {
          this.markByChapterUid[reviewItem.chapterUid].marks.push(tmpMarkItem);
        } else {
          this.markByChapterUid[reviewItem.chapterUid] = {
            marks: [tmpMarkItem],
            chapterUid: reviewItem.chapterUid,
            title: reviewItem.chapterTitle,
          };
        }
      }
    }
  }
}
/**
 * 生成一本书的笔记
 * @param {object} inMarkData - 笔记
 * @param {object} inReviewData - 笔记评论
 */
export const generateBookMark = (
  inMarkData,
  inReviewData = { reviews: [] }
) => {
  let book = new Book(inMarkData, inReviewData);
  return book.getText();
};
