import React from "react";
import styled from "@emotion/styled";
import { graphql, StaticQuery } from "gatsby";
import { Counter } from "../components/Counter";

const SingleColumn = styled.div`
    margin: 3rem auto;
    max-width: 600px;
`;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allContentfulLesson {
            edges {
                node {
                    id
                    title
                    slug
                    modules {
                        ... on ContentfulLessonCopy {
                            copy {
                                id
                                copy
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default ({ data }) => (
    <SingleColumn>
        <h1>{data.site.siteMetadata.title}</h1>
        <Counter />
        {data.allContentfulLesson.edges.map(({ node: { title, modules } }) => (
            <div>
                <h2>{title}</h2>
                {modules
                    .filter(({ copy }) => !!copy)
                    .map(({ copy }) => (
                        <p>{copy.copy}</p>
                    ))}
            </div>
        ))}
    </SingleColumn>
);
