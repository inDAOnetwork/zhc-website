# Model Selection Matrix

## Сложность задачи → Модель

| Уровень | Примеры задач | Модель | Обоснование |
|---------|--------------|--------|-------------|
| **Trivial** | heartbeat check, простой статус, чтение файла | Gemini 2.0 Flash | Быстро, дёшево, 1M context |
| **Routine** | логирование, форматирование, простой код, npm run build | DeepSeek Chat | $0.14/1M, fast, достаточно для рутины |
| **Complex** | рефакторинг, анализ архитектуры, деплой, несколько файлов | MiniMax M2.5 (текущая) | Баланс cost/speed |
| **Critical** | стратегические решения, дизайн системы, безопасность, дорогие операции | Claude Opus 4.6 | Top-tier reasoning, 200k context |

## Когда менять модель в процессе

- Trivial → Complex: если задача растёт — переключить
- Complex → Critical: если требуется архитектурное решение — Eskalate к Opus
- Critical → Routine: после решения — вернуть на рутину

## Текущая конфигурация (2026-03-08)

| Model ID | Tier | Cost/1M input | Context | Best for |
|----------|------|---------------|---------|----------|
| google/gemini-2.0-flash-exp | Trivial | ~$0 | 1M | Heartbeats |
| deepseek/deepseek-chat | Routine | $0.14 | 64k | Code, logs |
| minimax/minimax-m2.5 | Complex | ~$0.5 | 128k | General |
| anthropic/claude-opus-4.6 | Critical | $15 | 200k | Strategy |

## Auto-switch правила

1. **Каждую задачу оценивай по сложности**
2. **Если текущая модель overqualified — работай на ней (не переключай ради мелочи)**
3. **Если current model недостаточна — сразу switch через session_status**
4. **После Critical задачи — вернись на Routine/Complex**

## Примеры

| Задача | Сложность | Модель |
|--------|-----------|--------|
| "Проверь статус сервисов" | Trivial | Gemini Flash |
| "Добавь коммит" | Routine | DeepSeek |
| "Проанализируй архитектуру сайта" | Complex | MiniMax |
| "Реши какой деплой выбрать" | Critical | Opus |