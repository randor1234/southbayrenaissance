/*
  Photos shown in the Photos section of southbayrenaissance.com.

  To add photos:
    1. Drop the image (JPEG, ideally 1200 to 1600px on the long side) into the photos/ folder.
       Optionally drop a smaller copy (about 900px) with the same file name into photos/thumbs/.
       If there is no thumb, the full image is used in the grid.
    2. Add one line for it in the right gathering below (or add a new gathering block).
       Newest gathering first. The first photo in each gathering gets the big slot.
    3. Commit and push. Netlify redeploys the site in about a minute.

  Fields: file (name inside photos/), w and h (pixel size, used to keep layout stable while loading),
          caption (optional, shown on hover and in the lightbox).
*/
window.SBR_PHOTOS = [
  {
    event: "Open Weights AI Summit, with Aaron Levie",
    date: "Sep 1, 2026",
    where: "Redwood City",
    link: "https://luma.com/tribechat-peg5",
    photos: [
      { file: "2026-09-01-open-weights-summit-01.jpg", w: 1316, h: 741, caption: "The room, after the fireside" },
      { file: "2026-09-01-open-weights-summit-02.jpg", w: 1316, h: 740, caption: "Aaron Levie and Rajat Suri, mid-conversation" },
      { file: "2026-09-01-open-weights-summit-03.jpg", w: 1316, h: 740, caption: "On open weights and who owns what comes next" },
      { file: "2026-09-01-open-weights-summit-04.jpg", w: 1316, h: 740, caption: "Aaron Levie, co-founder and CEO of Box" },
      { file: "2026-09-01-open-weights-summit-05.jpg", w: 1225, h: 919, caption: "Under the summit banner" },
      { file: "2026-09-01-open-weights-summit-06.jpg", w: 1316, h: 740, caption: "The stage" },
      { file: "2026-09-01-open-weights-summit-07.jpg", w: 1316, h: 740, caption: "Aaron Levie" },
      { file: "2026-09-01-open-weights-summit-08.jpg", w: 1316, h: 740, caption: "Working through the audience questions" },
      { file: "2026-09-01-open-weights-summit-09.jpg", w: 689, h: 919, caption: "Fireside" },
      { file: "2026-09-01-open-weights-summit-10.jpg", w: 689, h: 919, caption: "Fireside" },
      { file: "2026-09-01-open-weights-summit-11.jpg", w: 1316, h: 740, caption: "The audience" },
      { file: "2026-09-01-open-weights-summit-12.jpg", w: 1316, h: 740, caption: "Hands up for Q&A" },
      { file: "2026-09-01-open-weights-summit-13.jpg", w: 1316, h: 740, caption: "A question from the floor" },
      { file: "2026-09-01-open-weights-summit-14.jpg", w: 1316, h: 740, caption: "Listening" },
      { file: "2026-09-01-open-weights-summit-15.jpg", w: 1316, h: 740, caption: "Networking under the plants" },
      { file: "2026-09-01-open-weights-summit-16.jpg", w: 1316, h: 740, caption: "Conversations by the railing" },
      { file: "2026-09-01-open-weights-summit-17.jpg", w: 1316, h: 740, caption: "A laugh in the hallway" },
      { file: "2026-09-01-open-weights-summit-18.jpg", w: 1316, h: 740, caption: "Founders meeting founders" },
      { file: "2026-09-01-open-weights-summit-19.jpg", w: 1316, h: 740, caption: "Name tags on" },
      { file: "2026-09-01-open-weights-summit-20.jpg", w: 1316, h: 740, caption: "Between sessions" },
      { file: "2026-09-01-open-weights-summit-21.jpg", w: 1316, h: 740, caption: "Over the food table" },
      { file: "2026-09-01-open-weights-summit-22.jpg", w: 1316, h: 740, caption: "New connections" },
      { file: "2026-09-01-open-weights-summit-23.jpg", w: 1316, h: 740, caption: "Smiles up" },
      { file: "2026-09-01-open-weights-summit-24.jpg", w: 1316, h: 740, caption: "Old friends, new friends" },
      { file: "2026-09-01-open-weights-summit-25.jpg", w: 1316, h: 740, caption: "Aaron Levie in the crowd afterwards" },
      { file: "2026-09-01-open-weights-summit-26.jpg", w: 1316, h: 740, caption: "The check-in table" }
    ]
  },
  {
    event: "South Bay Renaissance: The First Gathering",
    date: "Aug 28, 2026",
    where: "Sunnyvale",
    link: "https://luma.com/tribechat-k8os",
    photos: [
      { file: "2026-08-28-first-gathering-01.jpg", w: 1200, h: 900, caption: "The one that started it" }
    ]
  },
  {
    event: "Excellence in Tech: The Future of Consumer AI, with Karandeep Anand",
    date: "Aug 19, 2026",
    where: "Redwood City",
    link: "https://luma.com/lvflmt3d",
    photos: [
      { file: "2026-08-19-eit-consumer-ai-01.jpg", w: 1225, h: 919, caption: "The room during the fireside" },
      { file: "2026-08-19-eit-consumer-ai-02.jpg", w: 1225, h: 919, caption: "Karandeep Anand, CEO of Character.AI, with Rajat Suri" },
      { file: "2026-08-19-eit-consumer-ai-03.jpg", w: 689, h: 919, caption: "Fireside" },
      { file: "2026-08-19-eit-consumer-ai-04.jpg", w: 1225, h: 919, caption: "Settling in" },
      { file: "2026-08-19-eit-consumer-ai-05.jpg", w: 1225, h: 919, caption: "The audience" }
    ]
  }
];
