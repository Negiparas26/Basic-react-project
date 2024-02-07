
function dosomething(){
    console.log("hello world");
}

function printbye(){
    console.log("bye!!");
}



export default function Button(){
return (
    <div>
        <button onClick={dosomething}>click me </button>
        <p onMouseOver={printbye}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quam et quidem quos, quasi assumenda commodi velit ea obcaecati dignissimos veniam ab mollitia odit facilis, veritatis labore repellendus, suscipit impedit!</p>
    </div>
);

}