import React from "react";
import { useQuery, gql } from "@apollo/client";
import client from "./graphql.js";

const GET_PRODUCTS = gql`
    query {
        products(first: 10) {
            edges {
                node {
                    id
                    title
                    description
                    priceRange {
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    images(first: 1) {
                        edges {
                            node {
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    }
`;

function ProductList() {
    const { loading, error, data } = useQuery(GET_PRODUCTS, { client });

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return(
        <div>
            {data.products.edges.map(({ node }) => (
                <div key={node.id}>
                    <h2>{node.title}</h2>
                    <p>{node.description}</p>
                    <p> Price: {node.priceRange.maxVariantPrice.amount} {node.priceRange.maxVariantPrice.currencyCode}</p>
                    <img src={node.images.edges[0].node.originalSrc} alt={node.title} />
                </div>
            ))}
        </div>
    );
}

export default ProductList;