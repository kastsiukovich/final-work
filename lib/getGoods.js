const DATA_URL = 'http://localhost:3000/goods';
const getData = () => {
   fetch(DATA_URL).then(
      response => {
         console.log(response);
         return response.json();
      }
   )
      .then(
         data => {
            console.log(data)
            for (let i in data){
               let list = document.ATTRIBUTE_NODE
               console.log(data[i].src)

            }
            
            // let list = document.querySelector('ul');
            // list.innerHTML = '';
            // data.forEach(item => {
            //     list.innerHTML += `
            //     <li data-id="${item.id}">${item.name}<a class="edit_info"> Edit</a><a class="delete_info" href="#"> Delete</a></li>
            //     `
            // })
         }
      )
}
getData()

// const getGoods = async (url) => {
//    try {
//       const res = await fetch(url)
//       return res.json();
//    } catch (err) {
//       throw new Error(`!!!!!!!!! ${err} !!!!!!!!!!!!`)
//    }
// }
// const getGoodsInfo = () => {
//    const result = await getGoods(`${URL}`)
//    console.log(result)
//    return result
// }
// getGoodsInfo()