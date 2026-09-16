# Rokzo

Витрина UI-кита Rokzo — агента-помощника в поиске работы на рынке США/ЕС. Стек: Vite 8 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (`radix-nova`, Radix, Lucide).

## Запуск

```bash
npm install
npm run dev
```

Витрина кита открывается на `http://localhost:5173`.

## Где что лежит

| Путь | Назначение |
|---|---|
| `PRODUCT.md` | Стратегический контекст: пользователи, ценность, принципы, антиреференсы |
| `DESIGN.md` | Визуальная система: цвета, типографика, правила, отклонения от shadcn |
| `src/index.css` | Токены темы (OKLCH) — источник истины по значениям |
| `src/components/ui/` | Компоненты shadcn/ui, принадлежат проекту, правятся под DESIGN.md |
| `src/pages/ui-kit.tsx` | Витрина: все примитивы и продуктовые паттерны |
| `components.json` | Конфиг shadcn CLI |

## Добавить компонент

```bash
npx shadcn@latest add <name>
```

Новые компоненты попадают в `src/components/ui/` и автоматически подхватывают токены темы.

## Проверки

```bash
npm run lint
npm run build
```
