import { GraphQLClient, gql } from 'graphql-request';

async function main(userEmail) {
  const endpoint = 'https://mbench.hasura.app/v1/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    // headers: {
    //   authorization: 'Bearer MY_TOKEN',
    // },
  })

  const mutation = gql`
    mutation addEmail($email: String!) {
        insert_email_preview_one(object: { email: $email }) {
        email
      }
    }
  `

  const variables = {
    email: userEmail,
  }
  const data = await graphQLClient.request(mutation, variables)

  console.log(JSON.stringify(data, undefined, 2))
}


main(email).catch((error) => console.error(error))
