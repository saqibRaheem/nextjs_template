# NextTemplate - Production Ready Next.js Template

A comprehensive, production-ready Next.js template with Redux Toolkit, TypeScript, Tailwind CSS, and modern development practices.

## 🚀 Features

- **Next.js 13** with App Router
- **TypeScript** for type safety
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Dark/Light Mode** with system preference detection
- **Responsive Navigation** with mobile hamburger menu
- **Testing Setup** with Jest and React Testing Library
- **ESLint & Prettier** for code quality
- **Modular Architecture** with clean folder structure

## 📦 What's Included

### 🏗️ Architecture
- Clean, modular folder structure
- Redux store with sample slices (theme, counter)
- TypeScript configuration with proper typing
- Custom hooks for Redux integration

### 🎨 UI Components
- Responsive navigation with mobile menu
- Theme toggle with persistence
- Reusable components (Button, Card, Input, etc.)
- Loading spinner and page headers
- Feature cards and layouts

### 🌗 Theme System
- Light/Dark mode toggle
- System preference detection
- localStorage persistence
- Smooth transitions

### 🧪 Testing
- Jest configuration
- React Testing Library setup
- Sample tests for components and Redux slices
- Coverage reporting

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nextjs-frontend-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   └── contact/          # Contact page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── common/           # Common components
│   └── ...
├── store/                # Redux store
│   ├── slices/           # Redux slices
│   ├── hooks.ts          # Typed hooks
│   └── index.ts          # Store configuration
├── providers/            # Context providers
├── lib/                  # Utilities
├── types/                # TypeScript types
└── __tests__/            # Test files
```

## 🧪 Testing

Run tests:
```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## 🎨 Customization

### Theme Colors
Modify the color scheme in `app/globals.css`:
```css
:root {
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  /* ... other colors */
}
```

### Redux Store
Add new slices in `store/slices/` and include them in `store/index.ts`:
```typescript
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    counter: counterReducer,
    // Add your slice here
  },
});
```

### Navigation
Update navigation items in `components/layout/Navigation.tsx`:
```typescript
const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  // Add your routes here
];
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):
```bash
npx vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## 📝 Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint
- `test` - Run tests
- `test:watch` - Run tests in watch mode
- `test:coverage` - Generate coverage report

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Lucide React](https://lucide.dev/) - Icons

---

Built with ❤️ for the developer community.
```