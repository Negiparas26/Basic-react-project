/* eslint-disable react/prop-types */

function  Product({title,price=1}){

  return (
            <div>
                <h3>{title}</h3>
                <h5>price :{price}</h5>
                {price>30000 && <p>Discount of 5%</p>}
            </div>


  );

}
export default Product;

