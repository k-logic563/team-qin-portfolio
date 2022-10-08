import { faker } from '@faker-js/faker'

export const props = {
  id: faker.datatype.uuid(),
  name: faker.random.word(),
  description: faker.random.words(),
  forkCount: faker.datatype.number(),
  stargazerCount: faker.datatype.number(),
  languageSize: faker.datatype.number(),
  languageId: faker.datatype.uuid(),
  languageColor: faker.internet.color(),
  languageName: faker.random.word(),
}

export const mockData = {
  user: {
    repositories: {
      edges: [
        {
          node: {
            id: props.id,
            forkCount: props.forkCount,
            stargazerCount: props.stargazerCount,
            name: props.name,
            description: props.description,
            languages: {
              edges: [
                {
                  size: props.languageSize,
                  node: [
                    {
                      id: props.languageId,
                      color: props.languageColor,
                      name: props.languageName,
                    },
                  ],
                },
              ],
            },
          },
        },
      ],
    },
  },
}
