# NORDHUS

Demonstracyjny frontend marki domów modułowych NORDHUS.

## Stack
- Next.js 15 / App Router
- JavaScript
- Tailwind CSS v4
- next/image

## Uruchomienie
```bash
npm install
npm run dev
```
Aplikacja: http://localhost:3000

## Build produkcyjny
```bash
npm run build
npm start
```

## Formularz
Formularz `/kontakt` działa wyłącznie po stronie klienta. Po poprawnej walidacji dane są wypisywane przez `console.log` i nie są wysyłane ani zapisywane.

## Zdjęcia
Obrazy znajdują się w `public/images` i są wywoływane ścieżkami `/images/[nazwa].jpg`.
