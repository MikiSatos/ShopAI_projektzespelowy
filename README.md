#  Shop CRUD – Część B (rozszerzenie projektu partnera)

## Nowe pola w encji Product
W ramach drugiego etapu projektu **CRUD × 2 Encje** dodałam dwa nowe pola do encji **Product**:

| Pole       | Typ   | Opis                                      |
|-------------|--------|-------------------------------------------|
| `brand`     | TEXT  | Marka produktu (wymagane)                 |
| `discount`  | REAL  | Zniżka (%) — domyślnie 0, ≥ 0              |

---

## Wprowadzone zmiany
- zaktualizowano **model bazy danych** (`model.js`) – dodano kolumny *brand* i *discount*  
- zaktualizowano **walidację danych** (`validators.js`)  
- rozszerzono **endpointy API** (`routes.js`) o obsługę nowych pól  
- zaktualizowano **frontend** (`index.html`) – formularz, tabela i edycja produktów  

---

## Demo online
Aplikacja jest dostępna publicznie pod adresem:  
 [https://projekt-crud-ilya-raiko.onrender.com/](https://projekt-crud-ilya-raiko.onrender.com/)

---

## Uruchomienie lokalne (opcjonalnie)
```bash
cd backend
npm install
node app.js
Następnie otwórz http://localhost:3000

Endpointy API (zmodyfikowane)
Metoda	Endpoint	Opis
POST	/products	Dodanie produktu z polami brand i discount
PUT	/products/:id	Edycja produktu z nowymi polami

Walidacja pól:

brand – wymagane (TEXT)

discount – liczba ≥ 0 (domyślnie 0)

Przykładowe zapytanie
json
Copy code
{
  "name": "Headphones",
  "price": 249.99,
  "quantity": 15,
  "category": "Electronics",
  "brand": "Sony",
  "discount": 10
}
Odpowiedź:

json
Copy code
{ "message": "Product created", "id": 7 }
Interfejs użytkownika
Zaktualizowany interfejs pozwala na:

dodawanie i edytowanie pól Brand oraz Discount (%)

wyświetlanie obu pól w tabeli produktów

pełny CRUD (Create / Read / Update / Delete)



Informacje o Pull Request
Gałąź: feature/add-brand-and-discount

Opis: rozszerzenie encji Product o pola brand i discount

Autor: Aidana Abylkasymova

Status: gotowe do oceny / scalenia