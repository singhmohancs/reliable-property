import { useCallback, useEffect, useState } from 'react';
import { MdExitToApp } from '@react-icons/all-files/md/MdExitToApp';
import { Tag, Space } from 'antd';
import { getStorageData } from '@/lib/storage';
import { logoutUser } from '@/service/AuthService';
import { useRouter } from 'next/router';
import ConfirmModal from '@/component/ConfirmModal';

export const UserPanel = () => {
  const router = useRouter();
  const [user, setUser] = useState({})//useSelector(({ AuthReducer }) => AuthReducer);
  const [isConfirmModalOpen, setComfirmModalOpen] = useState(false);

  useEffect(() => {
    const data = JSON.parse(getStorageData("user") || "{}") || {
      name: 'Mohan Singh',
      email: 'mslogicmaster@gmail.com',
    };
    if(data) {
      setUser({...{permissions: ['admin', 'agent']},...data});
    }
  }, [])
  const IMAGE_PLACEHOLDER =
    'https://www.gravatar.com/avatar/06a50835a9910d8d9e0ba0e632f1649d4';
  const PERMISSION_TITLES = {'admin': 'Admin', agent: 'Agent'};  

  const handleLogout = useCallback(async () => {
    setComfirmModalOpen(true);
  }, []);

  const onConfirm = async () => {
    onCancel();
    const response = await logoutUser();
    if(response) {
      router.push("/login")
    }
  }

  const onCancel = () => {
    setComfirmModalOpen(false);
  }

  return (
    <div className="user-panel-container">
      <div className="user-details-container">
        <img
          alt={user.name}
          src={user.picture || IMAGE_PLACEHOLDER}
          className="avatar"
        />
        <h3 className="user-name">{user.name}</h3>
        <span className="user-email">{user.email}</span>
        {user.permissions && (
          <Space size={[8, 8]} wrap className="user-permissions" align="center">
            {user.permissions.map((permission) => (
              <Tag color="default" key={permission}>
                {PERMISSION_TITLES[permission]}
              </Tag>
            ))}
          </Space>
        )}
      </div>

      <div className="buttons-container">
        <button className="logout-button" onClick={handleLogout} type="button">
          <MdExitToApp size={16} color="#3f434a" />
        </button>
      </div>
      <ConfirmModal open={isConfirmModalOpen} onConfirm={onConfirm} onCancel={onCancel} message="Do you want to logout?" />
    </div>
  );
};
