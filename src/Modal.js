import React, { useEffect, useState } from 'react';
import FlowyComponent from './components/Flowy';
import { Modal } from 'antd';
import styled from 'styled-components';

const ModelReactStyles = styled(Modal)`
  width: 100% !important;
  height: 100% !important;
  top: 0px !important;
  padding-bottom: 0px !important;

  .ant-modal-content {
    height: 100%;
  }
  .ant-modal-header {
    display: none;
  }
  .ant-modal-body {
    height: 100%;
    padding: 0;
  }
  .ant-modal-footer {
    display: none;
  }
  .ant-modal-close-x {
    line-height: 42px;
  }
`;

function Shell() {
  
  return <ModelReactStyles visible>
      <FlowyComponent />
    </ModelReactStyles>
 
}

export default Shell;
