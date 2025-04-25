# Modern Hero Section

A responsive and interactive hero section built with React, TypeScript, and Tailwind CSS. Features include editable content, AI-powered content regeneration, and a dynamic image carousel.

## Features

- 📱 Fully responsive design
- ✏️ Editable headline and subheadline (click to edit)
- 🔄 AI-powered content regeneration
- 🖼️ Dynamic image carousel
- 🎨 Modern UI with smooth transitions
- 💨 Built with Tailwind CSS
- 📝 TypeScript support

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hero-section
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Heroicons

## Project Structure

```
hero-section/
├── src/
│   ├── components/
│   │   └── Hero.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Usage

The hero section is fully customizable:
- Click on the headline or subheadline to edit the text
- Click "Regenerate with AI" to cycle through different content variations
- The image automatically updates with each regeneration

## Development

To modify the hero section:
1. Edit `src/components/Hero.tsx` for component changes
2. Modify `sampleContent` array to update the content variations
3. Update `sampleImages` array to change the carousel images

## License

MIT 
