# vile — сайт для GitHub Pages

Это оригинальная страница vile.sh (сохранённая с Wayback Machine), переделанная под два ника:
**autumn** → https://t.me/segmented и **switchblades** → https://t.me/switchblades.

Всё вычищено от обёртки архива: убраны баннер Wayback, скрипты wombat/ruffle, комментарии
`FILE ARCHIVED ON ...`, все пути к ассетам переписаны на локальные — папку можно заливать как есть.
Экрана «Click To Proceed» больше нет: страница открывается сразу, музыка включается сама.

## Файлы

| Файл | Что это |
|---|---|
| `index.html` | сама страница: девочка качается, ники-ссылки, музыка, плюсики |
| `anim.css` | анимация `swing` (качание картинки) |
| `cosmo.css` | базовые стили страницы |
| `style.css` | тёмный фон и типографика |
| `vile.css` | правки раскладки под мобильные |
| `angelina_kapllani.png` | картинка девочки |
| `favicon.gif` | иконка сайта |
| `vile.mp3` | трек, играет с загрузки страницы |
| `audio.js` | автозапуск музыки (с фолбэком на первое действие пользователя) |
| `sparkle.js` | мерцающие «+» вокруг |
| `disable_inspect.js` | блокировка правой кнопки/Ctrl+U (было в оригинале) |
| `.nojekyll` | отключает Jekyll, чтобы GitHub отдавал файлы как есть |

## Как залить

1. Создай репозиторий, например `vile`.
2. Загрузи **содержимое** этой папки в корень репозитория (`Add file → Upload files`), не саму папку.
3. `Settings → Pages` → Source: **Deploy from a branch** → Branch: **main** → **/ (root)** → Save.
4. Через минуту-две сайт откроется по адресу:

```
https://<твой-ник>.github.io/vile/
```

Через git:

```bash
cd "C:/Users/adria/Downloads/just some worknig stuff/vile-site"
git init && git add . && git commit -m "vile"
git branch -M main
git remote add origin https://github.com/<твой-ник>/vile.git
git push -u origin main
```

## Мелочи

- Музыка стартует сразу, но Chrome/Safari по умолчанию блокируют автоплей со звуком у новых
  посетителей. На такой случай в `audio.js` есть фолбэк: трек включится с первым кликом, тапом,
  скроллом или нажатием клавиши. Это правило браузера, обойти его нельзя.
- Шрифты (`Source Sans Pro`, `Poppins`) подтягиваются с fonts.googleapis.com — если сеть их не отдаёт,
  сработает фолбэк на системный шрифт.
- Ссылки на Telegram открываются в новой вкладке.
- `disable_inspect.js` блокирует контекстное меню и горячие клавиши — тоже оригинальное поведение;
  если не нужно, удали строку `<script src="disable_inspect.js"></script>` из `index.html`.
