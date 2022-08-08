import React, { useState } from 'react'
import Link from 'next/link'
import {
  Container,
  Group,
  Text,
  ActionIcon,
  createStyles,
  useMantineColorScheme,
  Stack,
  Modal,
} from '@mantine/core'
import { IconMoon, IconMenu2, IconX } from '@tabler/icons'

import { navItems } from '@/constants/page'

const useStyles = createStyles((theme, { isDark }: { isDark: boolean }) => ({
  logo: {
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    fontSize: '18px',
  },
  icon: {
    borderColor: theme.colors.dark[0],
    color: isDark ? 'white' : theme.colors.dark[9],
  },
  iconMenu: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    fontSize: '18px',
    display: 'none',
    color: isDark ? 'white' : theme.colors.dark[9],

    [theme.fn.largerThan('md')]: {
      display: 'block',
    },
  },
  modal: {
    '.mantine-Modal-modal': {
      backgroundColor: theme.colors.pink[6],
    },
  },
  modalLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '28px',
    fontWeight: 700,
    fontFamily: theme.fontFamilyMonospace
  }
}))

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)
  const { classes } = useStyles({ isDark: colorScheme === 'dark' })

  return (
    <>
      <Container size="xl" py={20}>
        <Group position="apart">
          <ActionIcon
            className={classes.iconMenu}
            onClick={() => setOpened(true)}
          >
            <IconMenu2 size={20} className={classes.icon} />
          </ActionIcon>
          <Text className={classes.logo}>Shimabu IT University</Text>
          <Group>
            {navItems.map((item, i) => (
              <Link key={i} href={item.href} passHref>
                <a className={classes.link}>{item.title}</a>
              </Link>
            ))}
            <ActionIcon
              variant="outline"
              radius={8}
              onClick={() => toggleColorScheme()}
            >
              <IconMoon size={16} className={classes.icon} />
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
        <ActionIcon mb={50} onClick={() => setOpened(false)}>
          <IconX size={24} color="white" />
        </ActionIcon>
        <Stack>
          {navItems.map((item, i) => (
            <Link key={i} href={item.href} passHref>
              <a className={classes.modalLink}>{item.title}</a>
            </Link>
          ))}
        </Stack>
      </Modal>
    </>
  )
}
