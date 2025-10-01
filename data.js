let cart = []

// Function Display

const Displayproducts = (products = cart) => {
    let show = ``
    products.forEach(pro => {
        show += ` <div class="col-12 col-sm-6 col-md-3">
      <div class="card h-100">
        <img src="${pro.image}"
          class="card-img-top img-fixed" alt="Cappuccino">
        <div class="card-body">
          <h5 class="card-title">${pro.name}</h5>
          <p class="card-text">${pro.description}</p>
          <p class="fw-bold text-success">${pro.price}$</p>
          <a href="#" class="btn btn-warning w-100">Add to cart</a>
        </div>
      </div>
    </div>`
    
    })
    document.getElementById("show-product").innerHTML=show
}

fetch("https://thoenthonny.github.io/Coffee-Api/data.json")
    .then(res => res.json())
    .then(item => {
        cart = item
        Displayproducts()
    })
    .catch(err => alert(err))