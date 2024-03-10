let userData = [
  {

    id:1,
    name: "test1",
    email: "test1@gmail.com",
    phone: "01111111111",
    address: "222 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    },
  },
  {
    id:2,
    name: "test2",
    email: "test2@gmail.com",
    phone: "01222222222",
    address: "222 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    },
  },
  {
    id:3,
    name: "test3",
    email: "test3@gmail.com",
    phone: "0133333333",
    address: "333 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    },
  },
  {
    id:4,
    name: "test4",
    email: "test4@gmail.com",
    phone: "01444444444",
    address: "444 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    },
  },
  {
    id:5,
    name: "test5",
    email: "test5@gmail.com",
    phone: "015555555555",
    address: "444 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    },
  },
  {
    id:6,
    name: "test6",
    email: "test6@gmail.com",
    phone: "016666666666",
    address: "555 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    },
  },
  {
    id:7,
    name: "test7",
    email: "test7@gmail.com",
    phone: "017777777777",
    address: "777 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    },
  },
  {
    id:8,
    name: "test8",
    email: "test8@gmail.com",
    phone: "0188888888888",
    address: "888 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    },
  },
  {
    id:9,
    name: "test9",
    email: "test8@gmail.com",
    phone: "01999999999999",
    address: "888 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    }},
    {
    id:10,
    name: "test10",
    email: "test8@gmail.com",
    phone: "0100000000000",
    address: "888 building street",
    city: "cairo",
    product: {
      product1: "tv",
      product2: "camera",
    }}
];
function displayCards(){
    let allCards = ""
    for(let i = 0; i < userData.length; i++){
        allCards += `
        <div class="myCard ">
        <div class="innerHtml">
          <div class="card mb-3" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Order ${i+1}</h5>
              <hr>
              <h6 class="card-text">
              ${userData[i].name}
              </p>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampul${userData[i].id}"
              >
                Show Order 
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampul${userData[i].id}"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="exampul${userData[i].id}"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampul${userData[i].id}">
                        Order Details
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">

                      <p><span>Name:</span>${userData[i].name}</p>
                      <p><span>Email:</span>${userData[i].email}</p>
                      <p><span>Phone:</span> ${userData[i].phone}</p>
                      <p><span>Address:</span>${userData[i].address}</p>
                      <p><span>City:</span>${userData[i].city}</p>
                      <hr>
                      <div class="products">
                          <p><span>product1 :</span> ${userData[i].product.product1}</p>
                          <p><span>product2 :</span> ${userData[i].product.product2}</p>

                      </div>

                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Done
                      </button>
                      <button onclick="deleteCard(${i})" type="button" class="btn btn-danger">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
        document.getElementById("cardContainer").innerHTML = allCards
    


}}

displayCards()

function deleteCard(indx) {

    userData.splice(indx, 1);
    displayCards();
}

