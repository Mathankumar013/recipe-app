import React from "react";
import './viewReceipe.css';
import { VIEW_RECEIPE } from "../data/viewQuery";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

function ViewReceipe(){
    const {id}=useParams()
    const { loading,error,data}=useQuery(VIEW_RECEIPE,{
        variables:{
            id
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading recipes</p>;
    const recipes = data.getReceipe; 
    return(
        <>
        <div className="receipe-style">
            {recipes.map((receipe, index) => (
                <div key={index}>
                    <p><strong>Name:</strong> {receipe.receipeName}</p>
                    <p><strong>Ingredients:</strong> {receipe.ingredients}</p>
                    <p><strong>Instructions:</strong> {receipe.instruction}</p>
                    <div>
                        <img src={receipe.image} alt={receipe.receipeName} height={300} width={300}/>
                    </div>
                </div>
            ))}
            <Link to="/" className="btn btn-success">HOME</Link>
        </div>
        </>
    )
}
export default ViewReceipe;