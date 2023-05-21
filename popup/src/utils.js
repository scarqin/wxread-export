class Book {
  constructor(inMarkData, inReviewData, inProgressData) {
    this.book = inMarkData.book;
    this.chapters = inMarkData.chapters;
    this.markByChapterUid = {};
    this.progress = {
      startTime: inProgressData.startReadingTime,
      finishTime: inProgressData.finishTime,
      readingTime: inProgressData.readingTime,
    };
    this.generatechapters();
    this.generateMark(inMarkData.updated);
    this.generateReview(inReviewData.reviews);
    this.sortMarkByRange();
  }
  getText(type = "markdown") {
    let result = "";
    //生成描述
    result = `${this.book.title}\n${this.book.author}\n${Object.values(this.markByChapterUid).reduce((acc, i) => acc + i.marks.length, 0)} 个笔记\n`;
    //生成阅读周期
    result += `阅读周期:\n* 阅读时长：${Math.floor(this.progress.readingTime / 60 / 60)} 小时\n* 开始时间：${new Date(this.progress.startTime * 1000).toLocaleString()}\n* 结束时间：${new Date(this.progress.finishTime * 1000).toLocaleString()}\n---\n`;
    //生成笔记
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
          //TODO export image
          if (markItem.markText.includes("￼")) {
            console.log(markItem.markText);
          }
          result += `>${markItem.markText}\n\n<hr>\n\n`;
        }
      });
    });
    return result;
  }
  sortMarkByRange() {
    Object.keys(this.markByChapterUid).forEach((chapterUid) => {
      this.markByChapterUid[chapterUid].marks.sort((a, b) => {
        return Number(a.range.split("-")[0]) - Number(b.range.split("-")[0]);
      });
    });
  }
  generatechapters() {
    this.chapters.sort((a, b) => a.chapterIdx - b.chapterIdx);
    if (this.book.format === "txt") {
      this.chapters.forEach((val, key) => {
        val.title = `第 ${key + 1} 章${val.title ? ` ${val.title}` : ""}`;
      });
    }
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
      this.markByChapterUid[chapterItem.chapterUid].marks = marks.filter(
        (mark) =>
          //type=1 笔记,type=0 书签
          mark.chapterUid === chapterItem.chapterUid && mark.type === 1
      );
    }
  }
  /**
   * 生成评论
   */
  generateReview(reviews) {
    for (var i = reviews.length - 1; i >= 0; i--) {
      let reviewItem = reviews[i].review;
      if (reviewItem.type !== 1) continue;
      this.markByChapterUid[reviewItem.chapterUid] =
        this.markByChapterUid[reviewItem.chapterUid] ||
        Object.assign({
          chapterIdx: reviewItem.chapterIdx,
          title: reviewItem.chapterTitle,
          marks: [],
        });
      // sort by range
      let sameMarksItem = this.markByChapterUid[reviewItem.chapterUid].marks.find((marksItem) => reviewItem.range === marksItem.range);
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
export const generateBookMark = (inMarkData, inReviewData = { reviews: [] }, progressData) => {
  let book = new Book(inMarkData, inReviewData, progressData.book);
  return book.getText();
};
//* testCode
// import { reviewData, markData } from "./model/mock";
// generateBookMark(markData, reviewData);
