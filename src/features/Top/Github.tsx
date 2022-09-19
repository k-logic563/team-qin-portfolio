import { useMemo } from 'react'
import { Box, Stack, Text, Group, Center, Progress } from '@mantine/core'
import { IconStar, IconGitFork } from '@tabler/icons'
import SimpleBar from 'simplebar-react'

import { Heading } from '@/components/Element/Heading'
import { LinkButton } from '@/components/Element/Button/LinkButton'

import { useFetcher } from '@/hooks/useFetcher'
import { Repositories } from '@/types'

import * as styles from '@/styles'

export const Github = () => {
  const { classes } = styles.github.useStyles()
  const { data, error } = useFetcher<Repositories>('github/k-logic563')

  const languageProps = useMemo(() => {
    if (data) {
      return data.user.repositories.edges.map((repo) => {
        const totalSize = repo.node.languages.totalSize
        return repo.node.languages.edges.flatMap((lang) => {
          const size = parseFloat(((lang.size / totalSize) * 100).toFixed(1))

          if (!size) return []

          return {
            value: parseFloat(((lang.size / totalSize) * 100).toFixed(1)),
            color: lang.node.color,
            name: lang.node.name,
          }
        })
      })
    }
  }, [data])

  if (error) throw new Error(error)
  if (!languageProps) throw new Error()

  return (
    <>
      <SimpleBar className={classes.wrapper} autoHide={false}>
        <Stack spacing={40} mb={32}>
          {data?.user.repositories.edges.map(({ node }, index) => (
            <Box key={node.id}>
              <Text className={classes.title} mb={8}>
                {node.name}
              </Text>
              <Text mb={8}>{node.description ?? 'no description'}</Text>
              <Group className={classes.reviews} mb={8}>
                <Text>
                  <IconStar />
                  {node.stargazerCount}
                </Text>
                <Text>
                  <IconGitFork />
                  {node.forkCount}
                </Text>
              </Group>
              <Box>
                <Progress mb={8} sections={languageProps[index]} />
                <Group sx={{ gap: '4px 20px' }}>
                  {languageProps[index].map((props, i) => (
                    <Group key={i} spacing={6}>
                      <Box
                        className={classes.round}
                        sx={{ backgroundColor: props.color }}
                      />
                      <Text className={classes.language}>{props.name}</Text>
                      <Text
                        className={classes.percentage}
                      >{`${props.value}%`}</Text>
                    </Group>
                  ))}
                </Group>
              </Box>
            </Box>
          ))}
        </Stack>
      </SimpleBar>
      <Center>
        <LinkButton href="https://github.com/k-logic563" target="_blank">
          View On GitHub
        </LinkButton>
      </Center>
    </>
  )
}
