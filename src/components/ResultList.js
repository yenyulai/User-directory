import React from "react";

function ResultList(props) {
  console.log(props.results[0])

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" type="button" >Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {
          
        props.results.map((result) => (
          
          <tr key={ result.login.uuid}>
            <td><img src={result.picture.thumbnail}/></td>
            <td>{result.name.first} {result.name.last}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.dob.date}</td>
          </tr>
        ))

        }

      </tbody>
    </table>
    // <ul className="list-group">

    //   {/* {props.results.map(result => (
    //     <li className="list-group-item" key={result.id}>
    //       <img alt={result.title} className="img-fluid" src={result.images.original.url} />
    //     </li>
    //   ))} */}
    // </ul>
  );
}

export default ResultList;
