let totalSum = 0;  // Переменная для хранения общей суммы

        // Функция поиска товаров
        function searchProducts() {
            const input = document.getElementById('search-input').value.toLowerCase();
            const products = document.getElementsByClassName('product');

            for (let i = 0; i < products.length; i++) {
                const productName = products[i].getElementsByTagName('h2')[0].textContent.toLowerCase();
                if (productName.includes(input)) {
                    products[i].style.display = "flex";
                } else {
                    products[i].style.display = "none";
                }
            }
        }

        // Функция для добавления товара в корзину и обновления общей суммы
        function addToCart(productId, pricePerItem) {
            const quantityInput = document.getElementById('quantity-' + productId);
            const quantity = parseInt(quantityInput.value);
            const total = quantity * pricePerItem;

            // Добавляем стоимость товара к общей сумме
            totalSum += total;

            // Обновляем отображение общей суммы
            const totalPriceElement = document.getElementById('total-price');
            totalPriceElement.textContent = `Итоговая сумма: ${totalSum} руб.`;
        }
