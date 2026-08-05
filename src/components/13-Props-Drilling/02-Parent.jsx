import Child from "./03-Child";

function Parent({user}) {

   return (
        <div>
            <h2>Props Drilling Example</h2>
            <Child user={user} />
         </div>
    );

}

export default Parent;