git branch
# Shop CRUD - Wymaganie A

## 1. Uruchomienie lokalnie

1. Przejd� do backend:
   cd backend
2. Zainstaluj zale�no�ci:
   npm install
3. Uruchom serwer:
   node app.js
4. Otw�rz przegl�dark�:
   http://localhost:3000/
- Frontend pozwala na pe�ny CRUD produkt�w: dodawanie, edytowanie, usuwanie i przegl�danie listy.

## 2. Endpoints API

| Method | Endpoint        | Opis                       |
|--------|----------------|----------------------------|
| GET    | /products       | Pobierz wszystkie produkty |
| GET    | /products/:id   | Pobierz produkt po ID      |
| POST   | /products       | Dodaj nowy produkt         |
| PUT    | /products/:id   | Edytuj produkt             |
| DELETE | /products/:id   | Usu� produkt               |

### Walidacja p�l:
- name (TEXT) � wymagany  
- price (REAL) � wymagany  
- quantity (INTEGER) � wymagany  
- category (TEXT) � opcjonalny  

### Kody HTTP:
- 200 OK � operacja zako�czona powodzeniem (GET, PUT, DELETE)  
- 201 Created � nowy produkt utworzony (POST)  
- 400 Bad Request � brak wymaganych p�l lub b��dny typ danych  
- 404 Not Found � nie znaleziono produktu po ID

## 3. Encja: Product

| Pole      | Typ       | Opis                     |
|-----------|----------|--------------------------|
| id        | INTEGER  | Klucz g��wny, autoinkrementacja |
| name      | TEXT     | Nazwa produktu          |
| price     | REAL     | Cena produktu           |
| quantity  | INTEGER  | Ilo�� produktu          |
| category  | TEXT     | Kategoria produktu (opcjonalnie) |

## 4. Zrzut ekranu UI

![Shop Products UI](frontend/screenshot.png)

## 5. Git / Repo

- Ka�da encja w osobnym module: backend/modules/products  
- Ga���: feature/products-crud  
- Pull Request do main zawiera: co zosta�o zaimplementowane, instrukcje uruchomienia lokalnego i zrzut ekranu UI
