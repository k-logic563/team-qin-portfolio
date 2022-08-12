import React from 'react'
import { Box, Group, Text, Center, Avatar, Stack } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'
import { LinkButton } from '@/components/Element/Button/LinkButton'

import * as styles from '@/styles'

export const Twitter = () => {
  const { classes } = styles.twitter.useStyles()

  return (
    <>
      <Box mb={24}>
        <Heading order={2}>Twitter</Heading>
      </Box>
      <Stack spacing={56} mb={40}>
        {[...Array(3).keys()].map((_, i) => (
          <Box key={i} className={classes.wrapper}>
            <Avatar src="https://picsum.photos/200" radius="xl" />
            <Box>
              <Group mb={4}>
                <Text className={classes.title}>しまぶーのIT大学</Text>
                <Text className={classes.date}>@shimabu_it・5月25日</Text>
              </Group>
              <Box>
                📣 新サービス「Noway
                Form」をリリースしました！試しに使っていただけると幸いです😊
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
      <Center>
        <LinkButton href="https://twitter.com/webD_hello21" target="_blank">
          View All
        </LinkButton>
      </Center>
    </>
  )
}
