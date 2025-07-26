# neo-design-patterns-hw-05

## 📌 Мета

Цей застосунок моделює ситуацію створення консольної утиліти з CLI-архітектурою. Основна мета — продемонструвати застосування структурних патернів **Фасад (Facade)** та **Адаптер (Adapter)** у реальному контексті.

## 🧱 Архітектура

У проєкті реалізовані такі патерни:

- **Фасад**:

  - `ReportManager` — високорівневий фасад, керує всім життєвим циклом створення звіту.
  - `AnalyzerFacade` — низькорівневий фасад, координує аналіз директорії та генерацію звіту.

- **Адаптер**:
  - `ReportAdapter` — спільний інтерфейс для адаптерів форматів.
  - `JsonReportAdapter`, `CsvReportAdapter`, `XmlReportAdapter` — адаптери для експорту у відповідні формати.

## 🗂 Структура проєкту

src/
├── AnalyzerFacade.ts
├── CsvReportAdapter.ts
├── DirectoryAnalyzer.ts
├── DirectoryReport.ts
├── JsonReportAdapter.ts
├── ReportAdapter.ts
├── ReportManager.ts
├── XmlReportAdapter.ts
└── main.ts

bash
Copy
Edit

## 🛠 Інсталяція

1. Клонувати репозиторій:
   ```bash
   git clone https://github.com/your-username/neo-design-patterns-hw-05.git
   cd neo-design-patterns-hw-05
   Встановити залежності:
   ```

bash
Copy
Edit
npm install
Ініціалізувати TypeScript:

bash
Copy
Edit
npx tsc --init
⚙️ Конфігурація TypeScript
Мінімальна конфігурація tsconfig.json:

json
Copy
Edit
{
"compilerOptions": {
"target": "ES2020",
"module": "commonjs",
"outDir": "./dist",
"rootDir": "./src",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true,
"forceConsistentCasingInFileNames": true
}
}
🚀 Запуск
Запустити утиліту можна командою:

bash
Copy
Edit
npx ts-node src/main.ts <path_to_directory> <format>
Параметри:

<path_to_directory> — шлях до директорії для аналізу (наприклад, "E:\\files\\images").

<format> — формат звіту: json, csv, або xml.

Приклад:

bash
Copy
Edit
npx ts-node src/main.ts "E:\\files\\images" xml
Результат:

pgsql
Copy
Edit
Report generated successfully: reports/report-2025-07-26T12-45-30-000Z.xml
📄 Формати звітів
JSON
json
Copy
Edit
{
"files": 54,
"directories": 5,
"totalSize": 8469671,
"extensions": {
".jpg": 22,
".png": 28
}
}
CSV
mathematica
Copy
Edit
Metric,Value
Total Files,54
Total Directories,5
Total Size (bytes),8469671

Extension,Count
.jpg,22
.png,28
XML
xml
Copy
Edit

<?xml version="1.0" encoding="UTF-8"?>
<report>
  <files>54</files>
  <directories>5</directories>
  <totalSize>8469671</totalSize>
  <extensions>
    <extension name=".jpg" count="22"/>
    <extension name=".png" count="28"/>
  </extensions>
</report>
