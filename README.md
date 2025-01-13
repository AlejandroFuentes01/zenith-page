# Zenith dev8 - Modern Digital Solutions Website

![Zenith.dev](https://i.pinimg.com/736x/b7/31/08/b731088b99a11c309365250f2f0db42d.jpg)

A modern, responsive website built with Astro and TailwindCSS for a digital solutions company. Features a beautiful UI, smooth animations, and multilingual support.

## 🚀 Features

- ⚡️ **Lightning Fast**: Built with Astro for optimal performance
- 🎨 **Modern Design**: Sleek UI with smooth animations and transitions
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🌐 **Multilingual**: Support for English and Spanish
- 🎯 **SEO Optimized**: Built-in SEO best practices
- 🔥 **Performance Optimized**: Lazy loading, image optimization, and more
- 🎨 **TailwindCSS**: For rapid UI development
- 🌙 **Smooth Animations**: Carefully crafted animations and transitions

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [nanostores](https://github.com/nanostores/nanostores)

## 📦 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── tech/          # Technology icons
├── src/
│   ├── components/    # UI components
│   ├── i18n/         # Translations
│   ├── layouts/      # Page layouts
│   ├── pages/        # Page components
│   └── store/        # State management
└── package.json
```

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/zenith-dev.git
cd zenith-dev
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

5. **Preview production build**

```bash
npm run preview
```

## 🎨 Customization

### Colors

The main colors can be customized in `tailwind.config.mjs`:

```js
colors: {
  primary: '#7C3AED',
  secondary: '#F472B6'
}
```

### Content

Update the content in:
- `src/i18n/translations.ts` for multilingual content
- Individual component files in `src/components/`

## 📱 Components

- `Hero`: Main landing section
- `Services`: Services showcase
- `WhyUs`: Company benefits
- `TechStack`: Technology showcase
- `Pricing`: Pricing plans
- `FAQ`: Frequently asked questions
- `ReadyToStart`: Call to action section
- `Footer`: Site footer with contact info

## 🌐 Multilingual Support

The site supports multiple languages through the `translations.ts` file. To add a new language:

1. Add translations to `src/i18n/translations.ts`
2. Update the language selector in `Navbar.astro`

## 🎯 Performance Optimizations

- Font preloading
- Image optimization
- Lazy loading
- Code splitting
- CSS optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/zenith-dev/issues).

## 📧 Contact

- Email: zenithdev8@gmail.com
- Twitter: [@zenithdev38311](https://twitter.com/zenithdev38311)
- Facebook: [ZENlTHDEV](https://www.facebook.com/ZENlTHDEV/)
- Instagram: [@zenithdev8](https://www.instagram.com/zenithdev8/)
