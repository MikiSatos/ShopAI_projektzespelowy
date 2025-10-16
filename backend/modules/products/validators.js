function validateProduct(data) {
    const { name, price, quantity, category } = data;
    if (!name || typeof name !== 'string') return "Name is required";
    if (price === undefined || typeof price !== 'number') return "Price is required";
    if (quantity === undefined || typeof quantity !== 'number') return "Quantity is required";
    if (category && typeof category !== 'string') return "Category must be text";
    return null;
}

module.exports = { validateProduct };
