function List(props){

    return props.mylist.map((elem)=>{
     //console.log(elem);
         return (<> <div className="container">
         <div className="card">
           <div className="card_inner">
            <div className="front"><img src={`https://robohash.org/${elem.id}?200x200`} alt='ROBOPHOTO'></img></div>
            <div className="back"><img src={`https://robohash.org/${elem.id}?200x200`} alt='ROBOPHOTO'></img>
              <h5>{elem.name}</h5>
              <h5>{elem.email}</h5>
              <h5>{elem.phone}</h5>
              </div>
            </div> 
         </div> 
         </div>
         </>
         )
     })
 
 }
 
 export default List;