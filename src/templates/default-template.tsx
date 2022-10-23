import React from 'react';
import Layout from '@/components/layout';

interface Props {
  children: React.ReactNode;
}

const DefaultTemplate: React.FC<Props> = ({ children }) => <Layout>{children}</Layout>;

export default DefaultTemplate;
