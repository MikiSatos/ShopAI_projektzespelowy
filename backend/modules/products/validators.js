function validateProduct(data) {
    const { name, price, quantity, category, brand, discount } = data;

    if (!name || typeof name !== 'string') return "Name is required";
    if (price === undefined || typeof price !== 'number' || price < 0) return "Price must be a number ≥ 0";
    if (quantity === undefined || typeof quantity !== 'number' || quantity < 0) return "Quantity must be a number ≥ 0";
    if (category && typeof category !== 'string') return "Category must be text";
    if (!brand || typeof brand !== 'string') return "Brand is required";
    if (discount === undefined || typeof discount !== 'number' || discount < 0) return "Discount must be a number ≥ 0";
    return null;
}

module.exports = { validateProduct };