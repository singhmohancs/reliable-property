import { useState } from 'react';
import { Menu, Tag } from 'antd';
import { UserPanel } from './Components/UserPanel';
import { getNavItems } from './constants';
import { usePathname,  } from 'next/navigation';


const SidenavLayout = () => {
  const pathName = usePathname();
  const evnName = 'development';
  const [nav] = useState(getNavItems());

  const activeKey = nav.find(
    (item: any) =>pathName === item.href)?.key || '1';
  return (
    <div className="sidebar">
      <div>
        <div className="logo">
          <img
            alt="logo"
            width={100}
            src="/logo.svg"
          />
          <Tag
            color="warning"
            className={`environment-badge ${
              evnName !== 'production' ? 'environment-badge-show' : ''
            }`}
          >
            {{ development: 'Dev', staging: 'Staging' }[evnName]}
          </Tag>
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={activeKey}
          items={nav}
        />
      </div>
      <UserPanel />
    </div>
  );
};

export default SidenavLayout;
