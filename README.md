# json-dashboard

I have a JSON array of this format

```
[
  {
    "alt_text": "",
    "gen_caption": "",
    "generated_caption": "",
    "id": "",
    "keywords": "",
    "media_id": "",
    "preview_thumbnail_path": "",
    "provider_preview_link": "",
    "provider_thumbnail_link": "",
    "type": "",
  },
  {
    "alt_text": "",
    "gen_caption": "",
    "generated_caption": "",
    "id": "",
    "keywords": "",
    "media_id": "",
    "preview_thumbnail_path": "",
    "provider_preview_link": "",
    "provider_thumbnail_link": "",
    "type": "",
  }
]
```

I want to create a dashboard by reading this JSON and It should be a infinite list and when I select a list item, I should be able to see the caption, generated_caption, gen_caption and alt_text. the item should be an image from preview_thumbnail_path. Read JSON from a file. Also, keep two column list, first column will show the image and second column will show the details when selecting an image.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/json-dashboard.git
cd json-dashboard
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
