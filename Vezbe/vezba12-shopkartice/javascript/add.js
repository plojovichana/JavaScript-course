const titlevalue = document.querySelector('#title').value;
const pricevalue = document.querySelector('#price').value;
const descriptionvalue = document.querySelector('#description').value;
const categoryvalue = document.querySelector('#category').value;
const imagevalue = document.querySelector('#image').value;



fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: titlevalue,
                    price: pricevalue,
                    description: descriptionvalue,
                    image: imagevalue,
                    category: categoryvalue
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


