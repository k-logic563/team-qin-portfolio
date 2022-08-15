import React, { useState } from 'react'
import Link from 'next/link'
import {
  Container,
  Group,
  ActionIcon,
  useMantineColorScheme,
  Stack,
  Modal,
  MediaQuery,
  CloseButton,
} from '@mantine/core'
import { IconMoon, IconSun, IconMenu2 } from '@tabler/icons'

import { navItems } from '@/constants/page'
import * as styles from '@/styles'

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)
  const { classes } = styles.header.useStyles()

  return (
    <>
      <Container size="lg">
        <Group position="apart">
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <IconMenu2 onClick={() => setOpened((x) => !x)} />
          </MediaQuery>
          <Link href="/" passHref>
            <a className={classes.logo}>Shimabu IT University</a>
          </Link>
          <Group>
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
              <Group>
                {navItems.map((item, i) => (
                  <Link key={i} href={item.href} passHref>
                    <a className={classes.link}>{item.title}</a>
                  </Link>
                ))}
              </Group>
            </MediaQuery>
            <ActionIcon
              variant="outline"
              radius={8}
              onClick={() => toggleColorScheme()}
              sx={(theme) => ({
                color:
                  theme.colorScheme === 'dark'
                    ? theme.white
                    : theme.colors.dark[6],
              })}
            >
              {colorScheme === 'dark' ? (
                <IconSun size={16} className={classes.icon} />
              ) : (
                <IconMoon size={16} className={classes.icon} />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        className={classes.modal}
        fullScreen
      >
        <CloseButton
          size={24}
          iconSize={24}
          mb={50}
          sx={(theme) => ({ color: theme.white })}
          onClick={() => setOpened(false)}
        />
        <Stack>
          {navItems.map((item, i) => (
            <Link key={i} href={item.href}>
              <a className={classes.modalLink} onClick={() => setOpened(false)}>
                {item.title}
              </a>
            </Link>
          ))}
        </Stack>
      </Modal>
    </>
  )
}
