export default function Counter(){
    var count =0;
    function Inccount(){

              count +=1;
              console.log(count); 
         }

return (
        <div>
          <h3> count = {count}</h3>
          <button onClick={Inccount}> increase count </button>
        </div>

    );


 
}