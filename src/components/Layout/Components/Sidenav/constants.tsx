import { AppstoreOutlined } from '@ant-design/icons';
import { FiLayers } from '@react-icons/all-files/fi/FiLayers';
import { CgCheckR } from '@react-icons/all-files/cg/CgCheckR';
import { FiHome } from '@react-icons/all-files/fi/FiHome';
import { FaTools } from '@react-icons/all-files/fa/FaTools';
import { BiDollar } from '@react-icons/all-files/bi/BiDollar';
import Link from 'next/link';
import { ReactNode } from 'react';

export const getNavItems = () => [
  {
    key: '1',
    label: <Link href="/" >Dashboard</Link>,
    icon: <FiHome />,
  },
  {
    key: '2',
    label: <Link href="/">Property</Link>,
    icon: <AppstoreOutlined />,
  },
  {
    key: '3',
    label: <Link href="/">Billing</Link>,
    icon: <BiDollar />,
  },
  {
    key: '4',
    label: <Link href="/">Settings</Link>,
    icon: <FaTools />,
  },
  {
    key: '5',
    label: <Link href="/">FAQ</Link>,
    icon: <FiLayers />,
  },
  {
    key: '6',
    label: <Link href="/">Support</Link>,
    icon: <CgCheckR />,
  },
];
