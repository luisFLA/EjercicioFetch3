document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("products");
            data.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("col-md-4", "mb-4");
                productCard.innerHTML = `
                    <div class="card h-100">
                        <img src="${product.images[0]}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="fw-bold">$${product.price}</p>
                            <p class="text-muted">Categoría: ${product.category.name}</p>
                        </div>
                    </div>
                `;
                container.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error al obtener los productos:", error));
});
