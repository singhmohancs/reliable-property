import { Button,  Space } from 'antd'
import styles from '@app/containers/PageHeader/PageHeader.module.scss'

const PageHeader = ({ title, description = '', actionButtons = [] }) => {
  return (
    <div className={styles.appContentHeader}>
			<div>
			{title && <h1 className={styles.headerTitle}>{title}</h1>}
      {description && <p>{description}</p>}
			</div>
     
      {actionButtons?.length > 0 && (
        <Space>
          {actionButtons.map((button) => {
            const { label, ...rest } = button
            return (
              <Button key={`action_btn_${label}`} {...rest}>
                {label || 'Button Label'}
              </Button>
            )
          })}
        </Space>
      )}
    </div>
  )
}

export default PageHeader
