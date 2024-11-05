import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import { GET_RECEIPE } from "../../data/queries";
import { useQuery } from "@apollo/client";

function Home() {
    const { loading, error, data } = useQuery(GET_RECEIPE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading recipes</p>;
    const recipes = data.getReceipe;

    return (
        <section className="home">
            <Link to="/receipe" className="btn btn-success">ADD RECEIPE</Link>
            <table className='table table-light'>
                <tbody>
                    {recipes.map((recipe) => (
                        <tr key={recipe.id}>
                            <td>
                                <img src={recipe.image} alt={recipe.receipeName} style={{ height: '200px', width: '250px' }} />
                            </td>
                            <td>
                                <h1>{recipe.receipeName}</h1>
                                <p className="p-style">{recipe.description}</p>
                                <Link to={`/viewReceipe/${recipe.id}`} className="btn btn-success">VIEW RECEIPE</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Home;
