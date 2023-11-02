# API Get list blog

**Request**

- Nếu không truyền `currentPage` mặc định `currentPage` = 1
- `currentPage` bắt đầu từ 1

```json
// [GET] /public/list-blog
{
  "currentPage": 1 // Nếu không truyền mặc định current page = 1
}
```

**Response**

- Dữ liệu trường `content` của từng bài viết sẽ được cắt (Gửi tối đa 1000 ký tự về phía client)
- 1 Response chỉ gửi về tối đa 10 bài viết (10 Bài viết / 1 lần call API)
- Sẽ cần code thêm API để chỉnh sửa giá trị `số bài viết / 1 lần call API`.

```json
{
  "statusCode": "number",
  "message": "",
  "totalPage": 10,
  "currentPage": 1,
  "data": {
    "title": "ブログ",
    "createDate": "",
    "content": [
      {
        "id": "blog-abcd", // Có thể dùng hàm hash để tạo ID
        "title": "Markdown cheatsheet",
        "createDate": "2023-10-05 22:53",
        "image": "https://res.cloudinary.com/seekda/image/upload/w_1200,h_800,c_fill,f_auto,fl_lossy,q_auto/production/AT_UAB6-12-38-03/_66347854-3649-46D6-B415-CA3E66BDC92C.jpg",
        "content": "#StandardfeaturesThefollowing<u>markdownfeatures</u>aredefinedbythe[CommonMark][]standard,andaregenerallysupportedbyallmarkdownparsersandeditors.##HeadingsHeadingsfrom\\`h1\\`through\\`h6\\`areconstructedwitha\\`#\\`foreachlevel:\\`\\`\\`#h1Heading##h2Heading###h3Heading####h4Heading#####h5Heading######h6Heading\\`\\`\\`RenderstothisHTML:\\`\\`\\`html<h1>h1Heading</h1><h2>h2Heading</h2><h3>h3Heading</h3><h4>h4Heading</h4><h5>h5Heading</h5><h6>h6Heading</h6>\\`\\`\\`Whichlookslikethisinthebrowser:#h1Heading##h2Heading###h3Heading####h4Heading#####h5Heading######h6Heading**Anoteabout\"Setext\"Headings**Notethatthisdocumentonlydescribes[ATXheadings](https://spec.commonmark.org/0.28/#atx-headings),asitisthepreferredsyntaxforwritingheadings.However,theCommonMarkspecificationalsodescribes[Setextheadings](https://spec.commonmark.org/0.28/#setext-headings),aheadingformatthatisdenotedbyalineofdashesorequalsignesfollowingtheheading.It'srecommendedbytheauthorofthisguidethatyouuseonlyATXheadings,astheyareeasiertowriteandreadintexteditors,andarelesslikeleytoconflictwithothersyntaxesanddemarcationsfromlanguageextensions.##ParagraphsBodycopywrittenasnormalplain-textwillbewrappedwith\\`<p></p>\\`tagsintherenderedHTML.Sothis:"
      }
    ]
  }
}
```

# API Lấy thông tin của 1 blog

**Request**

```json
// [POST] /public/blog-detail
{
  "id": "blog-abcd" // Không truyền ID, id không tồn tại => Trả về lỗi 404
}
```

**Response**

```json
{
  "statusCode": "number",
  "message": "",
  "totalPage": 10,
  "currentPage": 1,
  "data": {
    "id": "blog-abcd", // Có thể dùng hàm hash để tạo ID
    "title": "Markdown cheatsheet",
    "createDate": "2023-10-05 22:53",
    "image": "https://res.cloudinary.com/seekda/image/upload/w_1200,h_800,c_fill,f_auto,fl_lossy,q_auto/production/AT_UAB6-12-38-03/_66347854-3649-46D6-B415-CA3E66BDC92C.jpg",
    "content": "#StandardfeaturesThefollowing<u>markdownfeatures</u>aredefinedbythe[CommonMark][]standard,andaregenerallysupportedbyallmarkdownparsersandeditors.##HeadingsHeadingsfrom\\`h1\\`through\\`h6\\`areconstructedwitha\\`#\\`foreachlevel:\\`\\`\\`#h1Heading##h2Heading###h3Heading####h4Heading#####h5Heading######h6Heading\\`\\`\\`RenderstothisHTML:\\`\\`\\`html<h1>h1Heading</h1><h2>h2Heading</h2><h3>h3Heading</h3><h4>h4Heading</h4><h5>h5Heading</h5><h6>h6Heading</h6>\\`\\`\\`Whichlookslikethisinthebrowser:#h1Heading##h2Heading###h3Heading####h4Heading#####h5Heading######h6Heading**Anoteabout\"Setext\"Headings**Notethatthisdocumentonlydescribes[ATXheadings](https://spec.commonmark.org/0.28/#atx-headings),asitisthepreferredsyntaxforwritingheadings.However,theCommonMarkspecificationalsodescribes[Setextheadings](https://spec.commonmark.org/0.28/#setext-headings),aheadingformatthatisdenotedbyalineofdashesorequalsignesfollowingtheheading.It'srecommendedbytheauthorofthisguidethatyouuseonlyATXheadings,astheyareeasiertowriteandreadintexteditors,andarelesslikeleytoconflictwithothersyntaxesanddemarcationsfromlanguageextensions.##ParagraphsBodycopywrittenasnormalplain-textwillbewrappedwith\\`<p></p>\\`tagsintherenderedHTML.Sothis:"
  }
}
```
