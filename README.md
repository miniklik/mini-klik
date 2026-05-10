# 🌟 mini-klik.pl

**Polski portal kreatywny — narzędzia dla każdego, bez programowania, bez konta, bez opłat.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Active-green.svg)]()
[![Polski](https://img.shields.io/badge/J%C4%99zyk-Polski-red.svg)]()

🌐 **Strona projektu:** [mini-klik.pl](https://mini-klik.pl)
👤 **Autor:** Piotr Przebiorowski (Siedliszcze)

---

## ✨ Co to jest

mini-klik.pl to autorski zestaw **czterech niezależnych narzędzi internetowych**
działających bezpośrednio w przeglądarce. Każde z nich rozwiązuje konkretny
problem twórczy bez konieczności instalacji, rejestracji czy opłat.

Wszystkie narzędzia działają **w pełni offline po załadowaniu** — to zwykłe
pliki HTML, które można pobrać, zarchiwizować, hostować gdziekolwiek
(własny serwer, GitHub Pages, pendrive, e-mail).

## 🛠️ Narzędzia

### 🗺️ Edytor map (`edytor-map/`)
Tworzenie interaktywnych map z pinezkami, opisami, zdjęciami i dźwiękami.
Idealne dla blogerów-krajoznawców, parafii, bibliotek, lokalnych
youtuberów-eksploratorów.

**Funkcje:**
- 📍 Pinezki z opisami i zdjęciami
- 🏷️ Konfigurowalne kategorie z własnymi ikonami
- 🎧 Audio-przewodnik wyzwalany przez GPS w terenie
- 📷 Wbudowany skaner kodów QR
- 🛰️ Mapa drogowa lub satelitarna (Geoportal)
- 🎨 Rysowanie tras, kół, oznaczeń
- 🌙 Tryb nocny / dzienny / automatyczny
- 🔐 Tryb administratora chroniony hasłem (SHA-256)
- 💾 Eksport do samodzielnego pliku HTML

### 🔲 Generator QR (`edytor-map/qr-generator.html`)
Prosty samodzielny generator kodów QR — wklejasz adres, wybierasz rozmiar
(256 / 512 / 1024 px), pobierasz PNG. Idealne do tablic informacyjnych,
ulotek, wizytówek przy zabytkach.

### 🖌️ Studio animacji (`edytor/`)
Edytor animowanych życzeń okolicznościowych z gotową biblioteką szablonów:
ślub, chrzciny, komunia, święta, imieniny, matura, dyplom, walentynki,
rocznica.

### 🎮 Engine gier platformowych (`gry/`)
Edytor gier 2D z fizyką, poziomami, efektami wizualnymi, sterowaniem
dotykowym. Zawiera trzy gotowe dema.

## 🌟 Filozofia projektu

mini-klik.pl jest projektem typu "**stary internet**" — nawiązuje do
tradycji niezależnych narzędzi, które:

- **Działają na zawsze** — bez serwerów, bez baz danych, bez "chmury"
- **Nie wymagają konta** — zero rejestracji, zero loginów
- **Nie pobierają opłat** — raz pobrane, na zawsze własne
- **Nie zbierają danych** — żadnej telemetrii, żadnego śledzenia
- **Działają offline** — po załadowaniu nie potrzebują internetu

To narzędzia dla **odkrywców internetowych** — twórców regionalnych,
animatorów kultury, parafii, bibliotek, lokalnych pasjonatów — którzy
chcą **dzielić się wiedzą o swoich miejscach**, ale nie chcą zależeć od
amerykańskich serwerów i miesięcznych subskrypcji.

## 🎯 Dla kogo

- 🎬 **Youtuberzy regionalni** (krajoznawcy, eksploratorzy zabytków, podróżnicy lokalni)
- 📚 **Blogerzy historyczni** dokumentujący swoje regiony
- ⛪ **Parafie** mapujące kapliczki, krzyże, miejsca pamięci
- 📚 **Biblioteki gminne** organizujące gry terenowe i mapy lokalne
- 🏛️ **Małe muzea** i regionalne izby pamięci
- 🎓 **Nauczyciele** prowadzący lekcje historii lokalnej
- 🏫 **Szkoły** organizujące projekty młodzieżowe
- 🌳 **Lasy Państwowe** i ścieżki edukacyjne

## 🚀 Jak zacząć

Wszystkie narzędzia są dostępne pod adresem [mini-klik.pl](https://mini-klik.pl) — wystarczy
otworzyć w przeglądarce.

Aby pobrać do siebie:

```bash
git clone https://github.com/[twój-username]/mini-klik.pl.git
```

Lub pobierz ZIP z GitHub.

Każdy plik `.html` można otworzyć osobno — działa też lokalnie z dysku.

## 📂 Struktura projektu

```
mini-klik.pl/
├── index.html              # strona główna portalu
├── edytor-map/             # 🗺️ edytor map
│   ├── index.html          # strona startowa
│   ├── edytor.html         # edytor (główne narzędzie)
│   └── qr-generator.html   # 🔲 generator QR
├── edytor/                 # 🖌️ studio animacji
│   ├── index.html
│   └── biblioteka/         # szablony okolicznościowe
├── gry/                    # 🎮 engine gier
│   ├── index.html
│   ├── demo3/, demo4/, demo5/
└── moje-mapy/              # 📍 przykładowe mapy
```

## 💝 Wesprzyj projekt

Jeśli mini-klik.pl Ci się przydał — możesz **[postawić mi kawę ☕](https://buycoffee.to/mini-klik)**.
To projekt prowadzony hobbystycznie, więc każde wsparcie się liczy i pomaga
mi rozwijać kolejne narzędzia.

## 📜 Licencja

Kod udostępniany jest na licencji **MIT** — możesz go używać, modyfikować,
hostować, dzielić się komercyjnie lub niekomercyjnie. Wymagam tylko
zachowania informacji o autorze.

Zobacz pełny tekst w pliku [LICENSE](LICENSE).

## 🤖 Sposób tworzenia

Projekt powstaje w modelu **AI-augmented development** — autor pełni rolę
architekta i projektanta produktowego, a kod implementacyjny pisany jest we
współpracy z Claude (Anthropic). Każda funkcja, każdy interfejs, każda
decyzja produktowa to autorstwa Piotra Przebiorowskiego.

To nowoczesne podejście do tworzenia oprogramowania, które w 2026 roku
otwiera możliwości tworzenia projektów wcześniej wymagających kilkuosobowych
zespołów programistycznych — dla osób z wizją produktową, niezależnie od
formalnego wykształcenia technicznego.

## 📬 Kontakt

**Piotr Przebiorowski**
Siedliszcze, Polska
🌐 [mini-klik.pl](https://mini-klik.pl)

---

*"Internet powinien być dla ludzi, nie dla algorytmów."*

⭐ Jeśli się podoba — daj gwiazdkę na GitHubie!
