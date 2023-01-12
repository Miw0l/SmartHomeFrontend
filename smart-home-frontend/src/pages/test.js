import React from 'react';
import { Button } from 'antd';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';

export default (
  <ProLayout>
    <PageContainer
      extra={[
        <Button key="3">Operating</Button>,
        <Button key="2">Operating</Button>,
        <Button key="1" type="primary">
          Main Operating
        </Button>,
      ]}
      footer={[
        <Button key={1}>reset</Button>,
        <Button key={2} type="primary">
          submit
        </Button>,
      ]}
    >
      
    </PageContainer>
  </ProLayout>
);