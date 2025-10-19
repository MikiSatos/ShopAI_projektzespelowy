# Shop CRUD - Wymaganie A

## 1. Uruchomienie lokalnie

1. PrzejdŸ do backend:
   cd backend
2. Zainstaluj zale¿noœci:
   npm install
3. Uruchom serwer:
   node app.js
4. Otwórz przegl¹darkê:
   http://localhost:3000/
- Frontend pozwala na pe³ny CRUD produktów: dodawanie, edytowanie, usuwanie i przegl¹danie listy.

## 2. Endpoints API

| Method | Endpoint        | Opis                       |
|--------|----------------|----------------------------|
| GET    | /products       | Pobierz wszystkie produkty |
| GET    | /products/:id   | Pobierz produkt po ID      |
| POST   | /products       | Dodaj nowy produkt         |
| PUT    | /products/:id   | Edytuj produkt             |
| DELETE | /products/:id   | Usuñ produkt               |

### Walidacja pól:
- name (TEXT) – wymagany  
- price (REAL) – wymagany  
- quantity (INTEGER) – wymagany  
- category (TEXT) – opcjonalny  

### Kody HTTP:
- 200 OK – operacja zakoñczona powodzeniem (GET, PUT, DELETE)  
- 201 Created – nowy produkt utworzony (POST)  
- 400 Bad Request – brak wymaganych pól lub b³êdny typ danych  
- 404 Not Found – nie znaleziono produktu po ID

## 3. Encja: Product

| Pole      | Typ       | Opis                     |
|-----------|----------|--------------------------|
| id        | INTEGER  | Klucz g³ówny, autoinkrementacja |
| name      | TEXT     | Nazwa produktu          |
| price     | REAL     | Cena produktu           |
| quantity  | INTEGER  | Iloœæ produktu          |
| category  | TEXT     | Kategoria produktu (opcjonalnie) |

## 4. Zrzut ekranu UI

![UI Screenshot](frontend/screenshot.png)

## 5. Git / Repo

- Ka¿da encja w osobnym module: backend/modules/products  
- Ga³¹Ÿ: feature/products-crud  
- Pull Request do main zawiera: co zosta³o zaimplementowane, instrukcje uruchomienia lokalnego i zrzut ekranu UI
